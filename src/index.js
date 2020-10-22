import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App2 from "./App2"

ReactDom.render(
    <BrowserRouter>
        <App2 />
    </BrowserRouter>,
    document.getElementById("root")
)
