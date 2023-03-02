const mysql = require('mysql2');

exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'agenda'
});
