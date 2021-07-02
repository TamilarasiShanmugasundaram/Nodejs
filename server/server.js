const http = require('http');
const apiRouter = require('./routes');
const express = require('express');
const app = express();

app.use(express.json());
//app.get('/api', apiRouter);
app.use('/api', apiRouter);

app.get('/',(req, res) => {
    res.send('hello world');
});

app.listen(process.env.PORT || '3000',() => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});


// http.createServer(function (req, res) {

// //Return the url part of the request object:
// var url = req.url;
// //res.write(url);
// if(url === '/api') {
//     res.write('hello');
  
//   app.get('/api', apiRouter);
  
// //res.write(JSON.stringify(apiRouter, null, 4));
// } else {
//     res.write('enter correct url')
// }

//     res.end(); //end the response
//   }).listen(3000); //the server object listens on port 8080

  