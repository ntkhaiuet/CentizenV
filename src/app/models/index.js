const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aoaoao99',
    database: 'centizenv_dev'
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

module.exports = db;
