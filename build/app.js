"use strict";
// Using tutorial https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./Hello");
ReactDOM.render(React.createElement(Hello_1.default, { name: "Shawn" }), document.getElementById('root'));
// import greeting from "./some_module";
// console.log(greeting);
