import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel'

import Contact from './Components/Contact';
import Menu from './Components/Menu';
import Suggestions from './Components/Suggestions';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to="/Menu" className="nav-link active">Menu</Link>
                </li>
                <div className="nav-item">
                  <h3 style={{color:"white"}}>Excellent Cakes</h3>
                </div>
                <li className="nav-item">
                  <Link to="/Suggestions" className="nav-link active">Sugerencias</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link active">Contactos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/Contact"><Contact/></Route>
          <Route path="/Suggestions"><Suggestions/></Route>
          <Route path="/Menu"><Menu/></Route>
        </Switch>
        <div>
          
        </div>
    

      </div>
    </Router>
  );
}

export default App;
