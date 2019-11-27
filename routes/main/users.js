// jshint esversion: 8
// jshint node: true
"use strict";

var express = require('express');
var router = express.Router();
const request = require('request');

const {accessSecret, refreshToken, cookieExtractor} = require('../../helper/accessSecret');


const getRegister = function(req, res){
// router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Registrieren'
  });
};


const postRegister = function(req, res){
  var url = 'http://localhost:3000/api/v1/user/register';
  request.post(url, {form: req.body})
    .on('response', function(response) {
      // concatenate updates from datastream
      var body = '';
      response.on('data', function(chunk){
          //console.log("chunk: " + chunk);
          body += chunk;
      });
      response.on('end', function(){
        if(response.statusCode !== 200){
          return res.status(400).send(JSON.parse(body));
        }
        res.redirect('/user/login');
      });
    })
    .on('error', function(err) {
      return res.status(400).send('Fehler');
  });
};


const getLogin = function(req, res){
// router.get('/login', async (req, res) => {
  res.render('login', {
    title: 'Login'
  });
};


const postLogin = function(req, res){
  var url = 'http://localhost:3000/api/v1/user/login';
  request.post(url, {form: req.body})
    .on('response', function(response) {
      // concatenate updates from datastream
      var body = '';
      response.on('data', function(chunk){
          //console.log("chunk: " + chunk);
          body += chunk;
      });
      response.on('end', function(){
        if(response.statusCode !== 200){
          return res.status(400).send(JSON.parse(body));
        }
        // token is generated
        // set cookies (name: "access" and "refresh") with token as content
        const cookieOptions = {
          httpOnly: true, // the cookie only accessible by the web server
        };
        res.cookie('access', (JSON.parse(body)).token, cookieOptions);
        res.cookie('refresh', (JSON.parse(body)).refreshToken, cookieOptions);
        return res.redirect('/secret'); //homePage
      });
    })
    .on('error', function(err) {
      return res.status(400).send('Fehler');
  });
};


const getSecret = function(req, res){
  accessSecret(req, res);
};




const getSignout = function(req, res){
  var token = cookieExtractor(req, 'access');
  var options = {
    url: 'http://localhost:3000/api/v1/user/secret',
    headers: {
      'Authorization': 'Bearer '+token
    }
  };
  request.get(options)
    .on('response', function(response) {
      // concatenate updates from datastream
      var body = '';
      response.on('data', function(chunk){
          //console.log("chunk: " + chunk);
          body += chunk;
      });
      response.on('end', function(){
        if(response.statusCode !== 200){
          return res.status(400).send(body);
        }
        res.clearCookie('access');
        res.clearCookie('refresh');
        res.redirect('/user/login');
      });
    })
    .on('error', function(err) {
      return res.status(400).send('Fehler');
  });
};



module.exports = {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  getSignout,
  getSecret,
};
