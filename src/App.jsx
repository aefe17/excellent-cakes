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
import home from './Components/home';


const routes = [
  {
    path: '/Recieved',
    component: Recieved,
  },
  {
    path: '/Suggestions',
    component: Suggestions,
  },
  {
    path: '/SuggestionSent',
    component: Sent,
  },
  {
    path: '/Contact',
    component: Contact,
  },
  {
    path: '/Menu',
    component: Menu,
  },
  {
    path: '/Order',
    component: Order,
  },
  {
    path: '/',
    component: home,
  },
]


function App() {
  return (
    <Router>
      <nav className="site-header sticky-top py-1 border border-bottom border-dark" style={{ backgroundColor: 'white' }}>
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
        {
          routes.map(item => {
            return (
              <Route path={item.path}>{item.component}</Route>
            )
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
