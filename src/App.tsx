import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Container/Home';
import Tao from './Pages/Tao'
import Demos from './Pages/Demos'
import Partido from './Pages/Partido'
import Love from './Pages/Love'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tao" component={Tao} />
                <Route exact path="/demos" component={Demos} />
                <Route exact path="/partido" component={Partido} />
                <Route exact path="/love" component={Love} />
            </Switch>
        </Router>
    );
}
