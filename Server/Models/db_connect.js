require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'avangers',
    database: 'BooksBuzz'
});

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        con.query(sql, binding, (err, result, fields) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = { con, query };