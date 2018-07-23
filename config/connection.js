var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_ORANGE_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_ORANGE_URL);
} else {
  connection = mysql.createConnection({
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