import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAccount from './components/MyAccount';

function App() {
  return (
    <Router>
      <div className='d-flex justify-content-start'>
        <Route>
          <NavBar />
        </Route>
        <Switch>
          <div className='mx-auto my-5'>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/myaccount">
              <MyAccount />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
