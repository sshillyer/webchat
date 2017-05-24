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
var ChatHistory_1 = require("./ChatHistory");
var MessageEntry_1 = require("./MessageEntry");
var ChatInterface = (function (_super) {
    __extends(ChatInterface, _super);
    function ChatInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatInterface.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(ChatHistory_1.default, null),
            React.createElement(MessageEntry_1.default, { username: this.props.username, message: "" })));
    };
    ChatInterface.prototype.handleSend = function () {
        // Not sure how to get the onclick handler working with TypeScript; tutorial makes it look easy.
        alert("Clicked!");
    };
    return ChatInterface;
}(React.Component));
exports.default = ChatInterface;
