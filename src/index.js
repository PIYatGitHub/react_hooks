import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h3>Welcom to hooks</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};
//006
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
