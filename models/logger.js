// Connect to ORM
var orm = require('../config/orm.js');

var logger = {
    all: function(cb){
        orm.all('logger',function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update('logger',id,cb);
    }
}

module.exports = logger;