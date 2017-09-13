import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux"

import Test from "./Components/App/AppComponent";

import { store } from "./store"

document.addEventListener("DOMContentLoaded", function (event) {
    const root = document.createElement("div")
    const body = document.querySelector("body");
    if (body == null)
        return;
    body.style.backgroundColor = "#dddddd";
    body.appendChild(root);
    ReactDOM.render(<Provider store={store}><Test /></Provider>, root);
});


import * as Actions from "./Reducers/Login/Actions";

