const mysql = require('mysql2');
const express = require('express');
const app = express();
app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tamilarasi@123",
  database: "Angular"
});

//let empl = {};

getCategories = (req,res)=> {
  con.connect(function(error) {
    if (error) throw err;
    con.query("SELECT * FROM Categories", function (err, result, fields) {
      if (err) {
        throw err;
      } 
      console.log('controller')
     res.send(result)
     //console.log(result)
    });
  });
}

checkUser = (req,res)=> {
  con.connect(function(error) {
    if (error) throw err;
    var sql = 'SELECT * FROM LoginCredentials where username = ? AND password = ?';
    con.query(sql, [req.body.userName, req.body.password], function (err, result, fields) {
      if (err) {
        throw err;
      } 
     res.send(result)
     console.log(result)
     //return result
    });
  });
}

addCategory = (req,res)=> {
    console.log('categotries')
  con.connect(function(error) {
    if (error) throw err;
    console.log('categoty')
      var sql = "INSERT INTO categories  (category) VALUES ?";
      var values = [[req.body.params]];
      con.query(sql, [values], function (err, result) {
      if (err) {
        throw err;
      } 
     res.send(result)
     console.log(result)
     return result;
    });
  });
}

module.exports = {getCategories,checkUser,addCategory};


//     var con = mysql.createConnection({
//     user: "root",
//     password: "Tamilarasi@123",
//     database: "Angular"
//   });

// con.connect(function(error) {
//     if (error) throw err;
//     con.query("SELECT * FROM Categories", function (err, result, fields) {
//       if (err) {
//         throw err;
//       } 
//      // res = result;
//      res.json(result)
//      console.log(result)
//     });
//   });
 //  return res;

//  var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Tamilarasi@123",
//   database: "Angular"
// });

// // app.get('/add',(req, res) => {
//    conn.connect(function(error) {
//      console.log("method");
//     if (error) throw err;
//   conn.query("SELECT * FROM categories", function (err, result, fields) {
//     if (err) {
//       throw err;
//     } 
//    // res.json(result);
// console.log(result);
//     resp = result;
    
//   });
//  // });
 
//  });
//  return resp;
// };
// conn.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO categories (category) VALUES ( 'hELLO')";
//   conn.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

//module.exports = empl;
