'use strict';
var http = require('http');

var port = process.env.PORT || 1337;
var express = require("express");

var app = express();

app.get("/", function (req, res) {
    console.log(req.headers);
    res.send("<html<body><h1>" + req.connection.localAddress + "\n " + req.url);
});


app.get("/api/users", function (req, res) {
    res.set("Content_Type", "application/json");
    res.send({ name: "Jason", email: "jason.andersen@terumobct.com", group: "Contributor", emailVerified: true });
});

//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.write("You called " + req.url + "\n");
//    res.end('Hello World\n');
//}).listen(port);

var server = http.createServer(app);
server.listen(1337);
