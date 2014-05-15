'use strict';

var mongoose = require('./db').mongoose,
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    config = require('./config'),
    space = require('./space'),
    db = require('./db').db;


var search = {}
search.getSpaces = function(req, res){
  space.getSpace(req.param('space'),res)
}

module.exports = search;

