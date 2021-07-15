import React from 'react';
import './Style/App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Tao from "./Pages/Tao";
import Love from "./Pages/Love";
import Partido from "./Pages/Partido";
import Demos from "./Pages/Demös";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/">
                 <Inicio />
              </Route>
              <Route path="/demös">
                  <Demos />
              </Route>
              <Route path="/love">
                  <Love />
              </Route>
              <Route path="/partido">
                  <Partido />
              </Route>
              <Route path="/tao">
                  <Tao />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
