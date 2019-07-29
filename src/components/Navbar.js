import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo_black.png'
import './style.css';

class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
          <Link className="navbar-brand" to='/'><img src={logo} alt="logo"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/challenge'>Challenge</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle pr-3" data-toggle="dropdown">Resources</Link>
                  <div className="dropdown-menu">
                    <Link to='/' className="dropdown-item">Design Tools</Link>
                    <Link to='/' className="dropdown-item">News in the city</Link>
                    <Link to='/solution' className="dropdown-item">Past Solutions</Link>
                  </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/faq'>FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/events'>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/forum'>Forum</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to='/involve'>Get Involved</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/#'>Log in</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
