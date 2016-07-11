/**
 * Created by nicolas on 11/07/2016.
 */
"use strict";

module.exports = function(app){

    app.use('/api/detection', require('./detection')(app));
    app.use("/api/", app.middlewares.errorHandler);

};