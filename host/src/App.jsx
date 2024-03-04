import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// import Counter from "remote/Counter";
import SuperHealth from "remote/SuperHealth";

const App = () => (
  <div className="container">
    This is PMS - Host
    <div className="panel_wrapper">
    <SuperHealth heading="Sandeep"/>

    </div>
    {/* <Counter/> */}
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
