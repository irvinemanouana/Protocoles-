/**
 * Created by nicolas on 11/07/2016.
 */
"use strict"

module.exports = function(app) {
    /**
     * @api {GET} /api/detection/all List detections
     * @apiName List
     * @apiGroup Detection
     *
     * @apiVersion 1.0.0
     * @apiParam {String} sort       brightness or detection_date Query parameter
     * @apiParam {String} order      asc or desc                  Query parameter
     *
     * @apiDescription Allow to list all detections.
     *
     * @apiSuccess Detection Model
     */
    return function(req, res, next){
        var sort  = req.query.sort,
            order = req.query.order;

        var query = app.models.Detection.find();

        if (!global.isNullOrEmpty(sort) && sort === 'brightness') {
            if (!global.isNullOrEmpty(order) && (order === 'asc' || order === 'desc')) {
                query.sort({ brightness: order });
            }
            else {
                query.sort({ brightness: 'asc' });
            }
        }
        else {
            if (!global.isNullOrEmpty(order) && (order === 'asc' || order === 'desc')) {
                query.sort({ detection_date: order });
            }
            else {
                query.sort({ detection_date: 'asc' });
            }
        }

        query.exec()
            .then(function(instances) {
                res.json(instances);
            });
    }
};