'use strict';
var http = require('http');

var express = require("express");
var app = express();
var controllers = require("./controllers");

app.set("view engine", "vash");




app.get("/api/users", function (req, res) {

    res.set("Content-Type", "application/json");
    res.send({ name: "Jason", isValid: true, group: "Admin" });
});

controllers.init(app);

var port = process.env.PORT || 1337;

var server = http.createServer(app);


//var server = http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });

//    res.write(req.url);
//   res.end('Hello World\n');
//});

server.listen(port);
