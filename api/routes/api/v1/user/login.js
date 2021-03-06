// jshint esversion: 8
// jshint node: true
"use strict";

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const moment = require('moment');
const uuid = require('uuid');
const nodemailer = require('nodemailer');

const User = require('../../../../models/user');
const {registerValidation, resetPasswordValidation} = require('../../../../helper/validation');
const {createToken, isTokenValid, invalidateToken} = require('../../../../helper/authorization/jwt');
const {hashJWT} = require('../../../../helper/authorization/refreshToken');


/**
 * @api {post} /api/v1/user/signup Sign up
 * @apiName signUp
 * @apiDescription Sign up a new OpenBadges-User.
 * @apiGroup User
 *
 * @apiParam {String} firstname first name of the user; must consist of at least 6 characters
 * @apiParam {String} lastname last name of the user; must consist of at least 6 characters
 * @apiParam {String} city the user's place of residence; must consist of at least 2 characters
 * @apiParam {Number} postalcode the postal code of the user's place of residence; minimum 01067, maximal 99998
 * @apiParam {Date} birthday the birthday of the user
 * @apiParam {String} email the email for the user
 * @apiParam {String} username the username for the user; it is used for signing in
 * @apiParam {String} password the desired password for the user; must consist of at least 6 characters
 * @apiParam {String} confirmPassword confirm the desired password for the user; must consist the same string as password
 * @apiParam {Base64-String} [image] Base64-String of an image
 * @apiParam {String} [contentType] contentType (mimeType) of an image<br>Example: `image/jpg`
 *
 * @apiSuccess (Created 201) {String} message `User is successfully registered.`
 * @apiSuccess (Created 201) {Object} user `{"firstname":"full firstname", "lastname":"full lastname", "city":"cityname", "postalcode":"123456", "birthday":"ISODate("1970-12-01T00:00:00Z")", "email":"test@test.de", "username":"nickname", "role":["earner"], "image": <Buffer>, "contentType": "image/png"}`
 *
 * @apiError (On error) {Object} 404 `{"message": "To store an image, \'image\' and \'contentType\' are required."}
 * @apiError (On error) {Object} 409 `{"message": "Email already exists"}`
 * @apiError (On error) {Object} 409 `{"message": "Username already exists"}`
 * @apiError (On error) {Object} 500 Complications during storage
 */
const postRegister = async function(req, res){
  // validate incoming data
  const {error} = registerValidation(req.body);
  if(error) return res.status(422).send({message: error.details[0].message});
  // checking if user is already in db
  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(409).send({message: 'Email already exists'});
  const usernameExists = await User.findOne({username: req.body.username});
  if(usernameExists) return res.status(409).send({message: 'Username already exists'});
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const emailToken = uuid();
  var body = {
    _id: new mongoose.Types.ObjectId(),
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    birthday: new Date(req.body.birthday),
    city: req.body.city,
    postalcode: req.body.postalcode,
    username: req.body.username,
    password: hashedPassword,
    emailConfirmationToken: emailToken,
  };
  if(req.body.image || req.body.contentType){
    if(req.body.image && req.body.contentType){
      body.image = new Buffer.from(req.body.image, 'base64');
      body.contentType = req.body.contentType;
    }
    else {
      return res.status(404).send({
        message: 'To store an image, \'image\' and \'contentType\' are required.',
      });
    }
  }
  // create a new user
  const user = new User(body);
  try{
    const savedUser = await user.save();

    // send an email to confirm the email
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD_Email;

    let transporter = nodemailer.createTransport({
      host: 'mail.gmx.net',
      port: 587,
      secure: false, // if false TLS
      auth: {
          user: email, // email of the sender
          pass: password // Passwort of the sender
      },
      tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
      }
    });
    var mailOptions = {
        from: '"OpenBadges"'+email, // sender address
        to: savedUser.email, // list of receiver
        subject: 'Email verifizieren', // Subject line
        html: '<b>Hallo '+user.firstname+' '+user.lastname+'</b><br><p>Dieser <a href="http://'+process.env.APP_HOST+':'+process.env.APP_PORT+process.env.EMAIL_TOKEN_URL+'?token='+savedUser.emailConfirmationToken+'">Link</a> ermöglicht das Verifizieren Ihrer Email-Adresse.<p>Liebe Grüße<br>Ihr OpenBadges-Team</p>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions);

    return res.status(201).send({
      message: 'User is successfully registered.',
      user: {
        firstname: savedUser.firstname,
        lastname: savedUser.lastname,
        city: savedUser.city,
        postalcode: savedUser.postalcode,
        birthday: savedUser.birthday,
        email: savedUser.email,
        username: savedUser.username,
        role: savedUser.role,
        image: savedUser.image,
        contentType: savedUser.contentType
      }
    });

  }
  catch(err) {
    return res.status(500).send(err);
  }
};


/**
 * @api {post} /api/v1/user/email/:emailToken Confirm Email
 * @apiName confirmEmail
 * @apiDescription Confirm an email of an user.
 * @apiGroup User
 *
 * @apiParam {String} emailToken Email-Token, to confirm the email-address
 *
 * @apiSuccess (Created 200) {String} message `Email is successfully confirmed.`
 *
 * @apiError (On error) {Object} 400 `{"message": Email-Token is not valid.}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database.
 */
const confirmEmail = async function (req, res){
  var emailToken = req.params.emailToken;
  try{
    var user = await User.updateOne(
      {emailConfirmationToken: emailToken, emailIsConfirmed: false},
      {emailIsConfirmed: true, emailConfirmationToken: ""});
    if(user.nModified > 0){
      return res.status(200).send({
        message: 'Email is successfully confirmed.'
      });
    }
    else{
      return res.status(400).send({
        message: 'Email-Token is not valid.'
      });
    }
  }
  catch(err){
    return res.status(500).send(err);
  }
};

/**
 * @api {post} /api/v1/user/signin Sign in
 * @apiName signIn
 * @apiDescription Sign in the user.
 * @apiGroup User
 *
 * @apiParam {String} username username of the user
 * @apiParam {String} password password of the user
 *
 * @apiSuccess (Success 200) {String} message `User successfully signed in`
 * @apiSuccess (Success 200) {String} token valid JSON Web Token
 * @apiSuccess (Success 200) {String} refreshToken valid refresh token
 *
 * @apiError (On error) {Object} 403 `{"message": "Username or password is wrong"}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database or creating a JWT.
 */
const postLogin = async function(req, res){
  try{
    // checking if the username exists
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(403).send({message:'Username or password is wrong'});
    // checking if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(403).send({message:'Username or password is wrong'});
    // create JWT-Token and refresh-Token
    const {token: token, refreshToken: refreshToken } = await createToken(user);
    return res.status(200).send({
      message: 'User successfully signed in',
      token: token,
      refreshToken: refreshToken
    });
  }
  catch(err) {
    return res.status(500).send(err);
  }
};

/**
 * @api {post} /api/v1/user/refreshToken Refresh token
 * @apiName refreshToken
 * @apiDescription Refresh the authorization, if the refresh token is valid.
 * @apiGroup User
 *
 * @apiParam {String} refreshToken the refresh token
 *
 * @apiSuccess (Success 200) {String} message `Authorization successfully refreshed.`
 * @apiSuccess (Success 200) {String} token valid JSON Web Token
 * @apiSuccess (Success 200) {String} refreshToken valid refresh token
 *
 * @apiError (On error) {Object} 403 `{"message": "Refresh token is invalid or too old. Please sign in with your user credentials."}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database or creating a JWT.
 */
const postRefreshToken = async function(req, res){
  var refreshToken = req.body.refreshToken;
  try{
    const user = await User.findOne({refreshToken: refreshToken, refreshTokenExpiresIn: { $gte: moment.utc().toDate() } });
    if (!user) {
      return res.status(403).send({
        message: 'Refresh token is invalid or too old. Please sign in with your user credentials.'
      });
    }
    else {
      // invalidate old token
      invalidateToken(refreshToken);
      // create JWT-Token and refresh-Token
      const {token: token, refreshToken: newRefreshToken } = await createToken(user);
      return res.status(200).send({
        message: 'Authorization successfully refreshed.',
        token: token,
        refreshToken: newRefreshToken
      });
    }
  }
  catch(err){
    return res.status(500).send(err);
  }
};



/**
 * @api {post} /api/v1/user/password/request Request reset password
 * @apiName requestResetPassword
 * @apiDescription Requests a password reset (in case of forgotten password). A link to reset the password will then be sent in an email, which is valid for 12 hours.
 * @apiGroup User
 *
 * @apiParam {String} username the username of the user; it is used for sending the email with all instructions
 *
 * @apiSuccess (Success 200) {String} message `Reset instructions successfully sent to user.`
 *
 * @apiError (On error) {Object} 404 `{"message": "User not found."}`
 * @apiError (On error) {Object} 500 Complications during sending the email with all instructions to reset the password.
 */
const requestResetPassword = async function (req, res){
  try{
    var token = uuid();
    var user = await User.findOneAndUpdate(
      {username: req.body.username},
      {resetPasswordToken: token, resetPasswordExpiresIn: moment.utc().add(12, 'h').toDate(), refreshToken: '', refreshTokenExpiresIn: moment.utc().subtract(1, 'h').toDate()},
      {new: true}
    );

    if(user){
      const email = process.env.EMAIL;
      const password = process.env.PASSWORD_Email;

      let transporter = nodemailer.createTransport({
        host: 'mail.gmx.net',
        port: 587,
        secure: false, // if false TLS
        auth: {
            user: email, // email of the sender
            pass: password // Passwort of the sender
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
      });
      var mailOptions = {
          from: '"OpenBadges"'+email, // sender address
          to: user.email, // list of receiver
          subject: 'Passwort zurücksetzen', // Subject line
          html: '<b>Hallo '+user.firstname+' '+user.lastname+'</b><br><p>Dieser <a href="http://'+process.env.APP_HOST+':'+process.env.APP_PORT+process.env.PASSWORD_TOKEN_URL+'?token='+token+'">Link</a> ermöglicht das Zurücksetzen des Passwortes.<br>Bitte beachten Sie, dass die Gültigkeit des Links auf 12 Stunden begrenzt ist.<p>Liebe Grüße<br>Ihr OpenBadges-Team</p>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions);

      return res.status(200).send({
        message: 'Reset instructions successfully sent to user.'
      });
    }
    else {
      return res.status(404).send({
        message: 'User not found.'
      });
    }
  }
  catch(err){
    return res.status(500).send(err);
  }
};



/**
 * @api {post} /api/v1/user/password/reset Reset password
 * @apiName resetPassword
 * @apiDescription Reset the password with the resetPasswordToken.
 * @apiGroup User
 *
 * @apiParam {String} resetPasswordToken token to reset password sent through email
 * @apiParam {String} password the new desired password for the user; must consist of at least 6 characters
 * @apiParam {String} confirmPassword confirm the new desired password for the user; must consist the same string as password
 *
 * @apiSuccess (Success 200) {String} message `Password successfully reset.`
 *
 * @apiError (On error) {Object} 403 `{"message": "Request password reset expired."}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database.
 */
const setResetPassword = async function (req, res){
  // validate incoming data
  const {error} = resetPasswordValidation(req.body);
  if(error) return res.status(400).send({message: error.details[0].message});

  var user = await User.findOne({resetPasswordToken: req.body.resetPasswordToken, resetPasswordExpiresIn: {$gte: moment.utc().toDate()}});
  if(user){
    try{
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      // update password
      await User.updateOne({_id: user._id}, {password: hashedPassword, resetPasswordToken: '', resetPasswordExpiresIn: moment.utc().subtract(1, 'h').toDate()});
      return res.status(200).send({
        message: 'Password successfully reset.'
      });
    }
    catch(err){
      return res.status(500).send(error);
    }
  }
  return res.status(403).send({
    message: 'Request password reset expired.'
  });
};


/**
 * @api {post} /api/v1/user/signout Sign out
 * @apiName signOut
 * @apiGroup User
 * @apiDescription Signs the user out, if JSON Web Token is valid. Invalidates the current JSON Web Token.
 *
 * @apiHeader {String} Authorization allows to send a valid JSON Web Token along with this request with `Bearer` prefix.
 * @apiHeaderExample {String} Authorization Header Example
 *   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo
 *
 * @apiSuccess (Success 200) {String} message `Signed out successfully`
 *
 * @apiError (On error) {Object} 403 `{"message": "JSON Web Token is invalid. Please sign in with your user credentials."}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database or creating the JWT.
 */
const postLogout = async function(req, res){
  const refreshToken = req.query.refreshToken;
  const rawAuthorizationHeader = req.header('authorization');
  const [, token] = rawAuthorizationHeader.split(' ');
  try {
    // invalidate JWT
    await invalidateToken(token);
    await User.updateOne({_id: req.user.id}, {refreshToken: '', refreshTokenExpiresIn: moment.utc().subtract(1, 'h').toDate()});
    res.status(200).send({
      message: 'Signed out successfully.'});
  }
  catch(err){
    res.status(500).send(err);
  }
};

module.exports = {
  postRegister,
  postLogin,
  postRefreshToken,
  requestResetPassword,
  setResetPassword,
  postLogout,
  confirmEmail
};
