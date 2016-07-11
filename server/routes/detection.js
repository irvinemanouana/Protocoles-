/**
 * Created by nicolas on 11/07/2016.
 */
"use strict";

var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){

    router.post('/detect',
        bodyparser,
        app.actions.detection.detect
    );

    router.get('/all',
        app.actions.detection.list
    );

    return router;
};