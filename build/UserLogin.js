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
var UserLogin = (function (_super) {
    __extends(UserLogin, _super);
    function UserLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLogin.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Web Chat Login"),
            React.createElement("form", null,
                React.createElement("input", { type: "text", name: "username", defaultValue: this.props.username }),
                React.createElement("input", { type: "submit", value: "Log On" }))));
    };
    return UserLogin;
}(React.Component));
exports.default = UserLogin;
