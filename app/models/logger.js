// Import the ORM
var orm = require("../config/orm.js");

var Todo = {
  all: function(cb) {
    orm.all("todos", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals arrays
  create: function(cols, vals, cb) {
    orm.create("todos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("todos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("todos", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = Todo;
