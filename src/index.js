import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/routes";
import TopBar from "../src/pages/components/topBar";
import { BrowserRouter as Router } from "react-router-dom";
import {CurrentUserProvider} from '../src/contexts/currentUser'; 

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar/>
        <Routes />
      </Router>
    </CurrentUserProvider>
  );
};
//020
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
