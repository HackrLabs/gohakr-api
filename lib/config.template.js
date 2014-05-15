'use strict'

var config = 
    { app: 
        { domain: "gohacker.org"
        , port: 11111
        , namespace: '/api'
        }
    , mongo:
        { host: 'localhost'
        , port: 1234
        , database: 'test'
        , user: ''
        , pass: ''
        }
    }

module.exports = config
