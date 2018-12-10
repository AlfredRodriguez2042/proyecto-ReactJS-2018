// Dependencies 
import React, { Component } from 'react';


// import PropTypes from 'prop-types';
// Assets
import logo from '../logo.svg';
import '../css/Header.css';
//import AppRoutes from '../routes';

// import About from './About/index';
// import Contact from './Contact/index';
// import Home from './Home/index';
// import Page404 from './Page404/index';


class Header extends Component {
  
  render() {

    return (
      <div className="header">
        <header className="content-header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="logo-text">Kuro~San</h1>

      {/* <Router>
    <div className="nav" >
    <ul className="nav-menu" >
      <li className="menu-link" > <Link className="link" to="/" >Home</Link> </li>
      <li className="menu-link" > <Link className="link" to="/about" >About</Link> </li>
      <li className="menu-link" > <Link className="link" to="/contact" >Contact</Link> </li>
      <li className="menu-link" > <Link className="link" to="/login" >login</Link> </li>
    </ul>
    <Switch>
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
    <Route  component={Page404} />
    </Switch> 
    </div>
    </Router> 
           */}
        </header>
      </div>
    );
  }
}

export default Header;
