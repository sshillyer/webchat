"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import * as ws from 'ws';
var server_1 = require("react-dom/server");
var WebSocket = require("ws");
var Message = require("./models/message");
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
// app.use('/assets', express.static('assets')); // if we make css for this later
// app.use('/', ChatController);
app.get('/', function (req, res) {
    var appString = server_1.renderToString(/>););
    // res.send(template({
    //     body: appString,
    //     title: 'Hello world from the server'
    // }))
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('Listening at http://localhost:' + port + '/'); // TODO: The replacement isn't happening here
});
