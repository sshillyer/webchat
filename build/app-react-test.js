"use strict";
// tutorial https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var ChatInterface_1 = require("./app/components/ChatInterface");
ReactDOM.render(React.createElement(ChatInterface_1.default, { username: "bob" }), document.getElementById('root'));
