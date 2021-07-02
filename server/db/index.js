const mysql = require('mysql2');
const express = require('express');
const http = require('http');
const app = express();

var res;
let empl = {};
empl.all = () => {
  
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tamilarasi@123",
    database: "EmployeeManagementSystem"
  });

con.connect(function(error) {
    if (error) throw err;
    con.query("SELECT * FROM Employee", function (err, result, fields) {
      if (err) {
        throw err;
      } 
      res = result;
    });
  });
   return res;
 };
 
module.exports = empl;
