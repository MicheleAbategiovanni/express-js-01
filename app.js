const http = require('http');
const express = require('express');

const app = express();


app.use('/products',(req,res,next) => {
    console.log('Second middleware');
    res.send('<h1>H3LL0 3xpressJS</h1>')
});

app.use('/',(req,res,next) => {
    console.log('First middleware')
    res.send('<h1>H3LL0 3xpressJS</h1>')
});

app.listen(3000, () => console.log("W3LC0M3 M1K3 ! \nServer is running on port 3000"));