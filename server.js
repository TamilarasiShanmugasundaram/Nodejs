// const express = require ('express');
// const routes = require('./Router/router');
// const server = express();
// server.use(express.json());
// server.use('/', routes); 
// const listener = server.listen(3200);







const apiRouter = require('./server/routes/index');
const express = require('express');
const app = express();
app.use(express.json());
app.use('/', apiRouter); 
const listener = app.listen(8080);
// app.listen(process.env.PORT || '3500',() => {
//   console.log(`Server is running on port: ${process.env.PORT || '3500'}`);
// });
// route.route('/add').post((req, res, next) => {
//   db.getCategories(req.body, (error, data) => {
//   // if (error) {
//   //   return next(error)
//   // } else {
//   //   res.json(data)
//   // }
// })
// });
// app.use(express.json());
// //app.get('/api', apiRouter);

// //app.get('/get', apiRouter);
// app.get('/get',(req, res) => {
//   console.log('get in server.js')
//   //res.send('hello worlddddddd');
//   apiRouter.route(req,res);
// });
// // app.post('/login', apiRouter);
// // app.post('/add', apiRouter);

// app.get('/',(req, res) => {
//     res.send('hello world');
// });




// // app.listen(process.env.PORT || '4000',() => {
// //     console.log(`Server is running on port: ${process.env.PORT || '4000'}`);
// // });

// // http.createServer(function (req, res) {

// // //Return the url part of the request object:
// // var url = req.url;
// // //res.write(url);
// // if(url === '/api') {
// //     res.write('hello');
  
// //   app.get('/api', apiRouter);
  
// // //res.write(JSON.stringify(apiRouter, null, 4));
// // } else {
// //     res.write('enter correct url')
// // }

// //     res.end(); //end the response
// //   }).listen(3000); //the server object listens on port 8080

// // const express = require("express");
// // const app = express();
// // var cors = require('cors');
// // var mysql = require('mysql2');
// // const bodyParser = require('body-parser')

// // var con = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "Tamilarasi@123",
// //     database: "Angular"
// // });
// // app.use(cors());
// // app.get('/get', (req,res) =>{
// //   con.connect(function(err) {
// //      if (err) throw err;
// //      con.query("SELECT * FROM Categories", function (err, result, fields) {
// //        if (err) throw err;
// //        console.log(result);
// //        res.json(result);
// //      });
// //    });
// // })

// // app.post('/login',bodyParser.json(), (req,res) =>{
// //   con.connect(function(err) {
// //      if (err) throw err;
// //           console.log(req.body.userName);
// //      //var sql = "SELECT * FROM LoginCredentials where username=" + req.body.userName;
// //      var sql = 'SELECT * FROM LoginCredentials where username = ? AND password = ?';
// //      con.query(sql, [req.body.userName, req.body.password], function (err, result, fields) {
// //        if (err) throw err;
// //        console.log(result);
// //        res.json(result);
// //      });
// //    });
// // })

// // app.post('/add', bodyParser.json(), (req,res) =>{
// //     con.connect(function(err) {
// //        if (err) throw err;
// //        var sql = "INSERT INTO categories  (category) VALUES ?";
// //        var values = [
// //          [req.body.params]
// //        ];
// //        con.query(sql, [values], function (err, result) {
// //        if (err) throw err;
// //        console.log('1 record inserted');
// //       // res.json('Inserted Successfully');
// //        });
// //      });
// // })
