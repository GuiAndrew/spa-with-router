import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home/Home";
import HtmlDefinition from "./components/HtmlDefinition/HtmlDefinition";
import CssDefinition from "./components/CssDefinition/CssDefinition";
import JsDefinition from "./components/JsDefinition/JsDefinition";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/htmldefinition" component={HtmlDefinition} />
                <Route path="/cssdefinition" component={CssDefinition} />
                <Route path="/jsdefinition" component={JsDefinition} />
            </Switch>
        </App>
    </Router>, 
document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
