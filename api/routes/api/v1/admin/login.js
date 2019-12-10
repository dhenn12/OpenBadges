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
 * @api {post} /user/signup Sign up
 * @apiName signUp
 * @apiDescription Sign up a new OpenBadges-user.
 * @apiGroup User
 *
 * @apiParam (Parameters for creating a new OpenBadges-user) {String} firstname Name the full first name of the admin; must consist of at least 6 characters
 * @apiParam (Parameters for creating a new OpenBadges-user) {String} lastname Name the full last name of the admin; must consist of at least 6 characters
 * @apiParam (Parameters for creating a new OpenBadges-user) {String} city the admin's place of residence; must consist of at least 2 characters
 * @apiParam (Parameters for creating a new OpenBadges-user) {Number} postalcode the postal code of the admin's place of residence; minimum 01067, maximal 99998
 * @apiParam (Parameters for creating a new OpenBadges-user) {Date} birthday the birthday of the admin
 * @apiParam (Parameters for creating a new OpenBadges-user) {String} email the email for the admin
 * @apiParam (Parameters for creating a new OpenBadges-user) {String} username the username for the admin; it is used for signing in
 * @apiParam (Parameters for creating a new OpenBadges-user) {String} password the desired password for the admin; must consist of at least 6 characters
 * @apiParam (Parameters for creating a new OpenBadges-user) {String} confirmPassword confirm the desired password for the admin; must consist the same string as password
 *
 * @apiSuccess (Created 201) {String} message `Admin is successfully registered`
 * @apiSuccess (Created 201) {Object} user `{"firstname":"full firstname", "lastname":"full lastname", "city":"cityname", "postalcode":"123456", "birthday":"ISODate("1970-12-01T00:00:00Z")", "email":"test@test.de", "username":"nickname", "role":["admin"]}`
 *
 * @apiError (On error) {String} 400 `{"message": <Passed parameters are not valid>}`
 * @apiError (On error) {String} 409 `{"message": "Email already exists"}` or `{"error": "Username already exists"}`
 * @apiError (On error) 500 Complications during storage
 */
const postRegister = async function(req, res){
  // validate incoming data
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send({message: error.details[0].message});
  // checking if user is already in db
  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(409).send({message: 'Email already exists'});
  const usernameExists = await User.findOne({username: req.body.username});
  if(usernameExists) return res.status(409).send({message: 'Username already exists'});
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const emailToken = uuid();
  // create a new user
  const admin = new User({
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
    role: 'admin'
  });
  try{
    const savedAdmin = await admin.save();

    return res.status(201).send({
      message: 'Admin is successfully registered',
      user: {
        firstname: savedAdmin.firstname,
        lastname: savedAdmin.lastname,
        city: savedAdmin.city,
        postalcode: savedAdmin.postalcode,
        birthday: savedAdmin.birthday,
        email: savedAdmin.email,
        username: savedAdmin.username,
        role: savedAdmin.role
      }
    });

  }
  catch(err) {
    return res.status(500).send(err);
  }
};


/**
 * @api {post} /admin/signin Sign in
 * @apiName signIn
 * @apiDescription Sign in the admin.
 * @apiGroup Admin
 *
 * @apiParam {String} username the username of the admin
 * @apiParam {String} password the password of the admin
 *
 * @apiSuccess (Success 200) {String} message `Admin successfully signed in`
 * @apiSuccess (Success 200) {String} token valid JSON Web Token
 * @apiSuccess (Success 200) {String} refreshToken valid refresh token
 *
 * @apiError (On error) {String} 403 `{"message": "Username or password is wrong"}`
 * @apiError (On error) 500 Complications during querying the database or creating a JWT
 */
const postLogin = async function(req, res){
  try{
    // checking if the username exists
    const admin = await User.findOne({username: req.body.username, role: 'admin'});
    if(!admin) return res.status(403).send({message:'Username or password is wrong'});
    // checking if password is correct
    const validPassword = await bcrypt.compare(req.body.password, admin.password);
    if(!validPassword) return res.status(403).send({message:'Username or password is wrong'});
    // create JWT-Token and refresh-Token
    const {token: token, refreshToken: refreshToken } = await createToken(admin);
    return res.status(200).send({
      message: 'Admin successfully signed in',
      token: token,
      refreshToken: refreshToken
    });
  }
  catch(err) {
    return res.status(500).send(err);
  }
};

module.exports = {
  postRegister,
  postLogin
};
