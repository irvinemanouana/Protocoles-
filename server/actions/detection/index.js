/**
 * Created by nicolas on 11/07/2016.
 */
"use strict"

module.exports = function(app){
    return {
        detect:     require('./detect')(app),
        list:       require('./list')(app)
    };
};