import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './assets/images/logo.png'

import Contact from './Components/Contact';
import Menu from './Components/Menu';
import Suggestions from './Components/Suggestions';
import Home from './Components/home'

function App() {
  return (
    <Router>
      <nav className="site-header sticky-top py-1 ">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <Link to="/" className="py-2 d-none d-md-inline-block navbar-brand" style={{ color: 'black' }}>home</Link>
          <Link to="/Menu" className="py-2 d-none d-md-inline-block navbar-brand" style={{ color: 'black' }}> menú</Link>
          <div>
            <img
              src={logo}
              alt=""
              style={{ height: 60, width: 300 }}
            />
          </div>
          <Link to="/Suggestions" className="py-2 d-none d-md-inline-block navbar-brand" style={{ color: 'black' }}>sugerencias</Link>
          <Link to="/Contact" className="py-2 d-none d-md-inline-block navbar-brand" style={{ color: 'black' }}>contacto</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/Contact"><Contact /></Route>
        <Route path="/Suggestions"><Suggestions /></Route>
        <Route path="/Menu"><Menu /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
