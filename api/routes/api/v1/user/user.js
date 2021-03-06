// jshint esversion: 8
// jshint node: true
"use strict";

const User = require('../../../../models/user');
const Course = require('../../../../models/user');


/**
 * @api {get} /api/v1/user/me Get details
 * @apiName getMe
 * @apiDescription Get details about currently logged in user.
 * @apiGroup User
 *
 * @apiHeader {String} Authorization allows to send a valid JSON Web Token along with this request with `Bearer` prefix.
 * @apiHeaderExample {String} Authorization Header Example
 *   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo
 *
 * @apiSuccess (Success 200) {String} message `User found successfully.`
 * @apiSuccess (Success 200) {Object} user `{"firstname":"full firstname", "lastname":"full lastname", "city":"cityname", "postalcode":"123456", "birthday":"ISODate("1970-12-01T00:00:00Z")", "email":"test@test.de", "username":"nickname", "role":"earner", "emailIsConfirmed": false}`
 *
 * @apiError (On error) {Obejct} 404 `{"message": "User not found."}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database.
 */
const getMe = async function(req, res){
  var id;
  if(req.user) id = req.user.id;
  try{
    const user = await User.findById(id, {_id: 0, __v: 0, password: 0, emailConfirmationToken: 0, resetPasswordToken: 0, resetPasswordExpiresIn: 0, refreshToken: 0, refreshTokenExpiresIn: 0});
    if(user){
      return res.status(200).send({
        message: 'User found successfully.',
        user: user
      });
    }
    return res.status(404).send({
      message: 'User not found.',
    });
  }
  catch(err){
    return res.status(500).send(err);
  }
};


/**
 * @api {put} /api/v1/user/me Change information
 * @apiName putMe
 * @apiDescription Update the information about currently logged in user.
 * @apiGroup User
 *
 * @apiHeader {String} Authorization allows to send a valid JSON Web Token along with this request with `Bearer` prefix.
 * @apiHeaderExample {String} Authorization Header Example
 *   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo
 *
 * @apiParam {String} [lastname] Name the new full last name of the user; must consist of at least 6 characters
 * @apiParam {String} [city] the user's new place of residence; must consist of at least 2 characters
 * @apiParam {Number} [postalcode] the new postal code of the user's place of residence; minimum 01067, maximal 99998
 * @apiParam {String} [email] the new email of the user
 * @apiParam {Base64-String} [image] Base64-String of an image
 * @apiParam {String} [contentType] contentType (mimeType) of an image<br>Example: `image/jpg`
 *
 * @apiSuccess (Success 200) {String} message `User information updated successfully.` or `User information not changed.`
 * @apiSuccess (Success 200) {Object} user `{"firstname":"full firstname", "lastname":"full lastname", "city":"cityname", "postalcode":"123456", "birthday":"ISODate("1970-12-01T00:00:00Z")", "email":"test@test.de", "username":"nickname", "role":"earner", "emailIsConfirmed": false, "image": <Buffer>, "contentType": "image/png"}`
 *
 * @apiError (On error) {Object} 404 `{"message": "User not found."}`
 * @apiError (On error) {Object} 404 `{"message": "To update an image, 'image' and 'contentType' are required."}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database.
 */
const putMe = async function(req, res){
  console.log(req.body.user);
  try{
    var user = await User.findById(req.user.id);
    if(user){
      var updatedUser = {};
      if(req.body.lastname){
        if(req.body.lastname != user.lastname){
          updatedUser.lastname = req.body.lastname;// in case of marriage
      }}
      if(req.body.email){
        if(req.body.email != user.email){
          updatedUser.email = req.body.email;
      }}
      if(req.body.city){
        if(req.body.city != user.city){
          updatedUser.city = req.body.city;
      }}
      if(req.body.postalcode){
        if(req.body.postalcode != user.postalcode){
          updatedUser.postalcode = req.body.postalcode;
      }}
      if(req.body.image || req.body.contentType){
        if(req.body.image && req.body.contentType){
          if(req.body.image != user.image) {updatedUser.image = new Buffer.from(req.body.image, 'base64');}
          if(req.body.contentType != user.contentType) {updatedUser.contentType = req.body.contentType;}
        }
        else {
          return res.status(404).send({
            message: 'To update an image, \'image\' and \'contentType\' are required.',
          });
        }
      }

      if(Object.keys(updatedUser).length > 0){
        var newUser = await User.findOneAndUpdate({_id: req.user.id}, updatedUser, {new: true});
        return res.status(200).send({
          message: 'User information updated successfully.',
          badge: newUser
        });
      }
      else {
        return res.status(200).send({
          message: 'User information not changed.',
          badge: user
        });
      }
    }
    return res.status(404).send({
      message: 'User not found.',
    });
  }
  catch(err){
    return res.status(500).send(err);
  }
};


/**
 * @api {delete} /api/v1/user/me Delete me
 * @apiName deleteMe
 * @apiDescription Delete the user-account and every dependent course  of currently logged in user (exists to false).
 * @apiGroup User
 *
 * @apiHeader {String} Authorization allows to send a valid JSON Web Token along with this request with `Bearer` prefix.
 * @apiHeaderExample {String} Authorization Header Example
 *   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTk5OTEwY2QxMDgyMjA3Y2Y1ZGM2ZiIsImlhdCI6MTU3ODg0NDEwOSwiZXhwIjoxNTc4ODUwMTA5fQ.D4NKx6uT3J329j7JrPst6p02d311u7AsXVCUEyvoiTo
 *
 * @apiSuccess (Success 200) {String} message `User deleted successfully.`
 *
 * @apiError (On error) {Object} 404 `{"message": "User not found."}`
 * @apiError (On error) {Obejct} 500 Complications during querying the database.
 */
const deleteMe = async function(req, res){
  var id;
  if(req.user) id = req.user.id;
  try{
    await Course.updateMany({participants: {$in: req.user.id}}, {$set: {participants: {$pull: req.user.id}}});
    await Course.updateMany({creator: req.user.id}, {$set: {exists: false}});
    // badges are only connected to user, if user is deleted, every dependecy is also deleted
    var user = await User.deleteOne({_id: id});
    if(user && user.deletedCount > 0){
      return res.status(200).send({
        message: 'User deleted successfully.',
      });
    }
    return res.status(404).send({
      message: 'User not found.',
    });
  }
  catch(err){
    return res.status(500).send(err);
  }
};




module.exports = {
  getMe,
  putMe,
  deleteMe
};
