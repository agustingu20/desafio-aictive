import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <NavBar />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
