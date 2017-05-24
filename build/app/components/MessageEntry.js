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
var MessageEntry = (function (_super) {
    __extends(MessageEntry, _super);
    function MessageEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageEntry.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("form", null,
                React.createElement("label", { htmlFor: "messageInput" }, "Message"),
                React.createElement("input", { type: "text", name: "message", value: "", id: "messageInput" }),
                React.createElement("input", { type: "submit", value: "Send" }))));
    };
    return MessageEntry;
}(React.Component));
exports.default = MessageEntry;
