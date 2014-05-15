'use strict';
var config = require('./config');
var mongoose = require('mongoose');
var uri = config.mongo.user + ':' + config.mongo.pass + '@' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.database
var database = mongoose.connect('mongodb://' + uri)

var db =
{ db: database
, mongoose: mongoose
}

module.exports = db
