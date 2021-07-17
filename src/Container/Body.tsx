import React from 'react';
import '../Style/Navbar.scss'
import { Route, Switch } from 'react-router-dom';
import Demos from '../Pages/Demös';
import Inicio from '../Pages/Inicio';
import Love from '../Pages/Love';
import Partido from '../Pages/Partido';
import Tao from '../Pages/Tao';

const routes:{ path: string, component: JSX.Element}[] = [
    { path: '/demös', component: <Demos />}, 
    { path: '/love', component: <Love />},
    { path: '/partido', component: <Partido />},
    { path: '/tao', component: <Tao />},
    { path: '/', component: <Inicio />},
];


function Body(props: any) {
    return (
        <Switch>
            {routes.map((r) =>
                <Route path={r.path}>
                    {r.component}
                </Route>
            )
            }
        </Switch>
    )
}
export default Body;
