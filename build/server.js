"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import { Server} from 'http';
var controllers_1 = require("./controllers");
var app = express();
var port = process.env.PORT || 3000;
app.use('/hello', controllers_1.ChatController);
app.listen(port, function () {
    console.log('Listening at http://localhost:' + port + '/'); // TODO: The replacement isn't happening here
});
