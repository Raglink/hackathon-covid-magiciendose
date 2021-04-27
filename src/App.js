
import './App.css';
import ArsForm from "./pages/ArsFrom"
import DdForm from "./pages/DdForm"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
                  <Router>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Formulaire Régions</Link>
                    </li>
                    <li>
                        <Link to="/dd-form">Formulaire Departements </Link>
                    </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/dd-form">
                    < DdForm/>
                    </Route>
                    <Route path="/">
                    <ArsForm />
                    </Route>
                </Switch>

            </Router>

    </div>
  );
}

export default App;
