// tutorial https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c

import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello";

ReactDOM.render(
    <Hello name="Shawn" />,
    document.getElementById('root')!
);
