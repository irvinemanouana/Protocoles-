/**
 * Created by nicolas on 11/07/2016.
 */
"use strict"

module.exports = function(app) {
    /**
     * @api {POST} /api/detection/detect Detect
     * @apiName Detect
     * @apiGroup Detection
     *
     * @apiVersion 1.0.0
     *
     * @apiHeader {String} ContentTypes:application/json
     *
     * @apiParam {String} date       Body parameter [Require]
     * @apiParam {String} brightness Body parameter [Require]
     *
     * @apiDescription Allow to save a detection.
     *
     * @apiSuccess Detection Model
     */
    return function(req, res, next){
        var dateString = req.body.detection_date,
            brightness = req.body.brightness;


        if (global.isNullOrEmpty(dateString) || isNaN(brightness)) {
            return next(app.errors.BAD_BODY_PARAMETER);
        }
        else {
            var date = new Date(dateString);
            if (!global.isDateValid(date)) {
                return next(app.errors.DATE_NOT_VALID);
            }
            else {
                var detection = new app.models.Detection({
                    detection_date : date,
                    brightness : brightness
                });

                detection.save()
                    .then(function(instance) {
                        res.json(instance);
                    })
                    .catch(function (err) {
                        console.error(err);
                        next(err);
                        throw err;
                    })
                    ;
            }
        }
    }
};