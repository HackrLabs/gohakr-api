'use strict';

var mongoose = require('./db').mongoose,
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    config = require('./config'),
    Promise = mongoose.Promise,
    db = require('./db').db;

var space = {}
space.SpaceSchema = new Schema(
    { name: String
    , address:
        { address: String
        , address2: String
        , city: String
        , state: String
        , zipcode: String
        }
    , coords:
        { latitude: Number
        , longitude: Number
        }
    , stateAbbr: String
    })
space.Space = mongoose.model('Space', space.SpaceSchema);
space.addSpace = function(req, res){
  var response =
  { status: 200
  , spaces: []
  }
  res.send(JSON.stringify(response))
}

space.getSpace = function(query,res){
  space.Space.find({})
    .exec(function(err, data){
      if( err )
        promise.error(err)

      query = query.toLowerCase()
      var meetsQuery = [];
      for(var i in data){
        if(data[i]._doc.address.city.toLowerCase() == query
          || data[i]._doc.address.state.toLowerCase() == query
          || data[i]._doc.name.toLowerCase() == query
          || data[i]._doc.stateAbbr.toLowerCase() == query
        ){
          meetsQuery.push(data[i]._doc)
        }
      }
      var response =
      { status: 200
      , spaces: meetsQuery
      , qty: meetsQuery.length
      }
      res.send(JSON.stringify(response))
    })
}

var findForQuery = function(query){
  return function(err, data){

  }
}

module.exports = space;

