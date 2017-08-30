import * as React from "react";
import * as ReactDOM from "react-dom";

import Test from "./Components/Test/TestComponent";

document.addEventListener("DOMContentLoaded", function (event) {
    const root = document.createElement("div")
    const body = document.querySelector("body");
    if (body == null)
        return;
    body.appendChild(root);
    ReactDOM.render(<Test />, root);
});
