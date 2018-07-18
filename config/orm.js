// Import MySQL Connection
var connection = require('./connection.js');

// Select Data from MyQL Database
var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * from ' + tableInput + ';', function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;