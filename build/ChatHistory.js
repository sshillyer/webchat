"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// TODO: Eliminate this Test code
var messages = ["First message", "second message", "Another message"];
var chatItems = messages.map(function (msg) {
    return React.createElement("li", { key: msg }, msg);
});
var ChatHistory = (function (_super) {
    __extends(ChatHistory, _super);
    function ChatHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatHistory.prototype.render = function () {
        return (React.createElement("div", { className: "chatHistory" },
            React.createElement("ul", null, chatItems)));
    };
    return ChatHistory;
}(React.Component));
exports.default = ChatHistory;
