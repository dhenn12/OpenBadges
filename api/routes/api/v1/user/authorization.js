// jshint esversion: 8
// jshint node: true
"use strict";

const moment = require('moment');

const User = require('../../../../models/user');
const {createToken, invalidateToken} = require('../../../../helper/authorization/jwt');


/**
 * @api {post} /api/v1/user/token/refresh Refresh token
 * @apiName refreshToken
 * @apiDescription Refresh the authorization, if the refresh token is valid.
 * @apiGroup User
 *
 * @apiParam {String} refreshToken the refresh token
 *
 * @apiSuccess (Success 200) {String} message `Authorization successfully refreshed`
 * @apiSuccess (Success 200) {String} token valid JSON Web Token
 * @apiSuccess (Success 200) {String} refreshToken valid refresh token
 * @apiSuccess (Success 200) {Object} user `{"id": 5e1b0bafeafe4a84c4ac31a9, "role": "earner"}`
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
        message: 'Authorization successfully refreshed',
        token: token,
        refreshToken: newRefreshToken,
        user: {
          id: user._id,
          role: user.role
        }
      });
    }
  }
  catch(err){
    return res.status(500).send(err);
  }
};




module.exports = {
  postRefreshToken,
};
