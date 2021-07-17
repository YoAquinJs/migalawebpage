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
const routes:{ path: string, component: JSX.Element}[] = [
    { path: '/demös', component: <Demos />}, 
    { path: '/love', component: <Love />},
    { path: '/partido', component: <Partido />},
    { path: '/tao', component: <Tao />},
    { path: '/', component: <Inicio />},
];

export default function App() {
    return (
        <Router>
            <Switch>
                { routes.map((r) =>
                    <Route path={r.path}>
                        {r.component}
                    </Route>
                    )
                }
            </Switch>
        </Router>
    );
}
