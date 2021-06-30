const mysql = require('mysql');

mysql.createPool({
    connectionLimit: 10,
    password: 'Tamilarasi@123',
    user: 'root',
    database: 'EmployeeManagementSystem',
    host: 'localhost',
    port: '3306'
});

let db = {};
db.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Employee`,(err, results) => {
           if(err)  {
               return reject(err);
           }
           return resolve(results);
        });
    });
};



module.exports = db;