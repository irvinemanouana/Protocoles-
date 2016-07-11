/**
 * Created by nicolas on 11/07/2016.
 */
"use strict";

module.exports = function(app){
    app.actions = {
        detection : require('./detection')(app)
    };
};