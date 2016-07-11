/**
 * Created by nicolas on 11/07/2016.
 */
"use strict";

module.exports = function(app){

    var DetectionSchema = new app.mongoose.Schema({
        detection_date: {
            type: Date,
            min: Date.now,
            require: true
        },
        brightness: {
            type: Number,
            require: true
        }
    });

    DetectionSchema.plugin(require('mongoose-timestamp'));

    return app.mongoose.model('Detection', DetectionSchema);
};