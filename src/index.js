import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/routes";
import TopBar from "../src/pages/components/topBar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <TopBar/>
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
