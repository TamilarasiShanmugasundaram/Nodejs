const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tamilarasi@123",
    database: "EmployeeManagementSystem"
  });

  
// mysql.createPool({
//     connectionLimit: 10,
//     password: 'Tamilarasi@123',
//     user: 'root',
//     database: 'EmployeeManagementSystem',
//     host: 'localhost',
//     port: '3306'
// });

con.connect(function(error) {
    if (error) throw err;
    console.log('tamilarasi');
    con.query("SELECT * FROM Employee", function (err, result, fields) {
      if (err) {
throw err;
      } 
      console.log(result);
    });
  });


// let empl = {};
// empl.all = () => {
//     return 'helloooo';
// //     return new Promise((resolve, reject) => {
// //         console.log('tamil');
// //           pool.query('SELECT * FROM Employee',(err, results) => {
// //             console.log("db");
// //            if(err)  {
// //             console.log("error");
// //                return reject(err);                    
// //            }
// //            console.log("success");
// //            return resolve(results);
// //         });
// //    });
// };
// module.exports = empl;