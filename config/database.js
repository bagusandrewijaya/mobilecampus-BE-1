const mysql = require('mysql2');

var connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mobile_db",

});

module.exports = connect;   