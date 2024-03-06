import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import SuperHealth from "./components/superHealth";

const App = () => (
  <div className="container">
    <div>This is React - Remote</div>
    <SuperHealth firstName="Default Value"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
