'use strict';

var express = require('express')
    require('express-namespace')
var config = require('./lib/config'),
    response = require('./lib/response'),
    space = require('./lib/space'),
    search = require('./lib/search')

var app = express();

app.namespace(config.app.namespace, function(){
    app.post('space/add', space.addSpace)
    app.get('search/:space', search.getSpaces)
});

app.listen(config.app.port);
console.log('Listening on port ' + config.app.port);
