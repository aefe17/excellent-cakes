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
import Order from './Components/Order'
import Sent from './Components/Sent'
import Recieved from './Components/Recieved'
import Home from './Components/home'





function App() {
  return (
    <Router>
      <nav className="site-header sticky-top py-1 border border-bottom border-dark" style={{ backgroundColor: 'white' }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <Link to="/" className="py-2 d-none d-md-inline-block navbar-brand text-black" >home</Link>
          <Link to="/Menu" className="py-2 d-none d-md-inline-block navbar-brand text-black" > menú</Link>
          <div>
            <img
              src={logo}
              alt=""
              style={{ height: 60, width: 300 }}
            />
          </div>
          <Link to="/Suggestions" className="py-2 d-none d-md-inline-block navbar-brand text-black" >sugerencias</Link>
          <Link to="/Contact" className="py-2 d-none d-md-inline-block navbar-brand text-black">contacto</Link>
        </div>
      </nav>
      <Switch>
        <Switch>
          <Route path="	">
            <Recieved />
          </Route>
          <Route path="/SuggestionSent">
            <Sent />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Suggestions">
            <Suggestions />
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
          <Route path="/Order/:id">
            <Order />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Switch>
    </Router>
  );
}

export default App;
