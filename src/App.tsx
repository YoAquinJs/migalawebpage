import React from 'react';
import './Style/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/">
                 <Home />
              </Route>
              {/*
                For each route you should add
                `
                <Route path="/">
                 <Home />
              </Route>
              `
              "/" This is home
              "/Name" will be localhost:3000/Name
              */}
          </Switch>
      </Router>
  );
}

export default App;
