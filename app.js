const express = require('express');


const app = express();

app.get('/',(req, res) => {
    res.send('hello world');
});
app.get('/tamil',(req, res) => {
    res.send('hello tamilarasi');
});
module.exports = app;

//npm run dev