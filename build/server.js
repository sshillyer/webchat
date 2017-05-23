"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import * as ws from 'ws';
var WebSocket = require("ws");
var Message = require("./models/message");
var controllers_1 = require("./controllers");
var serverPort = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: serverPort });
server.on('connection', function (ws) {
    ws.on('message', function (message) {
        try {
            var userMessage = new Message.UserMessage(message);
            broadcast(JSON.stringify(userMessage));
        }
        catch (e) {
            console.error(e.message);
        }
    });
});
console.log('Server is running on port', serverPort);
function broadcast(data) {
    server.clients.forEach(function (client) {
        client.send(data);
    });
}
;
var app = express();
app.use('/', controllers_1.ChatController);
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('Listening at http://localhost:' + port + '/'); // TODO: The replacement isn't happening here
});
