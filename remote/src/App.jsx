import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Counter from "./Counter";
import SuperHealth from "./SuperHealth";

const App = () => (
  <div className="container">
  <SuperHealth heading="Sanjay"/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
