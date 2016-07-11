"use strict";

require('./global');

var express = require('express'),
    app     = express();

(function init(){
    require('./configs')(app);
    require('./middlewares')(app)
    require('./actions')(app);
    require('./models')(app);
    require('./routes')(app);
}());

(function start() {
    app.listen(app.configs.server.port, app.configs.server.adress, setup());
}());

function setup() {
    console.log('Server listening on port :port'.replace(':port', app.configs.server.port));
}