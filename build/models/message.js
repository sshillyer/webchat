"use strict";
// Based on https://www.codeproject.com/Articles/871622/Writing-a-Chat-Server-using-Node-js-TypeScript-and
Object.defineProperty(exports, "__esModule", { value: true });
var UserMessage = (function () {
    function UserMessage(payload) {
        var data = JSON.parse(payload);
        if (!data.username || !data.message) {
            throw new Error('Invalid message payload received: ' + payload);
        }
        this.data = data;
    }
    Object.defineProperty(UserMessage.prototype, "username", {
        get: function () {
            return this.data.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMessage.prototype, "message", {
        get: function () {
            return this.data.message;
        },
        enumerable: true,
        configurable: true
    });
    UserMessage.prototype.toString = function () {
        return this.data.username + ' said: ' + this.data.message;
    };
    return UserMessage;
}());
exports.UserMessage = UserMessage;
