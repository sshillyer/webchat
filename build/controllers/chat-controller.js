"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var message_1 = require("../models/message");
var router = express_1.Router();
// Dummy variables to test history
var userName = "Bob";
var history = [];
for (var i = 0; i < 10; i++) {
    var newMsg = new message_1.UserMessage('{"username": "' + userName + '","message": "msg # ' + i.toString() + '"}');
    history.push(newMsg);
}
router.get('/', function (req, res) {
    res.send(history[3].toString());
});
exports.ChatController = router;
