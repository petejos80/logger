var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    root: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'logger_db'
});
};

connection.connect(function(err){
    if(err)throw err;
    console.log('Connected as id: ', connection.threadid);
})

module.exports = connection;