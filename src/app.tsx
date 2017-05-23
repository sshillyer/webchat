// tutorial https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c

import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello"; // TODO: Delete import
import UserLogin from "./UserLogin";
import MessageEntry from "./MessageEntry";
import ChatHistory from "./ChatHistory";
import ChatInterface from "./ChatInterface";

ReactDOM.render(
    <ChatInterface username="bob"/>,
    document.getElementById('root')!
);
