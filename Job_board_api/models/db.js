'user strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'job_board',
    multipleStatements: true
});
module.exports=connection;