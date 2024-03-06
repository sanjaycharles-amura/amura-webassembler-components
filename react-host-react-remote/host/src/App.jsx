import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// import Counter from "remote/Counter";
import SuperHealth from "remote/superHealth";

const App = () => (
  <div className="container">
    This is PMS - Host
    <SuperHealth firstName="Sandeep"/>
    {/* <Counter/> */}
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
