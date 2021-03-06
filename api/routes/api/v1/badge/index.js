// jshint esversion: 6
// jshint node: true
"use strict";

/**
* routes/api/v1/badge/index.js
* @see https://medium.com/@sesitamakloe/how-we-structure-our-express-js-routes-58933d02e491
*/

const express = require('express');
const BadgeRouter = express.Router();

const {userAuthorization} = require('../../../../helper/authorization/middleware');


BadgeRouter.route('/')
    .post(userAuthorization, require('./badge').postLocalBadge);

BadgeRouter.route('/')
    .get(require('./badge').getBadges);

BadgeRouter.route('/me')
    .get(userAuthorization, require('./badge').getBadgesMe);

BadgeRouter.route('/:badgeId')
    .get(require('./badge').getBadge);

BadgeRouter.route('/:badgeId')
    .put(userAuthorization, require('./badge').putBadgeLocal);

BadgeRouter.route('/:badgeId/deactivation')
    .put(userAuthorization, require('./badge').putBadgeLocalHidden);

BadgeRouter.route('/:badgeId/course/:courseId/assigne/user/:userId')
    .put(userAuthorization, require('./user').assigneBadge);

BadgeRouter.route('/:badgeId/course/:courseId/unassigne/user/:userId')
    .put(userAuthorization, require('./user').unassigneBadge);

module.exports = BadgeRouter;
