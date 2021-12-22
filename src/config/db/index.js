const mysql = require('mysql')

function connect() {

    try {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'aoaoao99',
            database: 'centizenv_dev'
        })
        connection.connect();
        console.log("Connect succesfully");
    } catch (error) {
        console.log("Connect failure");
    }
}

module.exports = { connect };
