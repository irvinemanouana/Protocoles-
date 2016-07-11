/**
 * Created by nicolas on 11/07/2016.
 */
"use strict";

var mongoose = require('mongoose');

module.exports = function(app){
    app.mongoose = mongoose.connect(app.configs.database.uri);
    app.mongoose.Promise = global.Promise;
    global.PromisifyAll(app.mongoose);

    app.models = {};
    app.models.Detection = require('./Detection')(app);
};