const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("hi")
    next()
})

app.use((req, res, next) => {
    console.log("hello")
    res.send('{key:value}')
})

const server = http.createServer(app);
server.listen(4000);