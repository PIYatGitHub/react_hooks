import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/routes";
import TopBar from "../src/pages/components/topBar";
import { BrowserRouter as Router } from "react-router-dom";
import {CurrentUserProvider} from '../src/contexts/currentUser'; 
import CurrentUserChecker from "./pages/components/currentUserChecker";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
         <Router>
        <TopBar/>
        <Routes />
      </Router>
      </CurrentUserChecker>     
    </CurrentUserProvider>
  );
};
//021 / 041
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
