// tutorial https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c

import * as React from "react";
import * as ReactDOM from "react-dom";
import UserLogin from "./app/components/UserLogin";
import MessageEntry from "./app/components/MessageEntry";
import ChatHistory from "./app/components/ChatHistory";
import ChatInterface from "./app/components/ChatInterface";

ReactDOM.render(
    <ChatInterface username="bob"/>,
    document.getElementById('root')!
);
