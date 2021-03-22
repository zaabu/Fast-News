/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Fast News
            </a>
            <a href="javascript:void(0)" onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul id="slide-out" className="sidenav" style={menuOpen ? stylesOpen : null}>
              <li>
                <a className="subheader">Menu</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/" className="item" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles/ca" className="item" onClick={toggleMenu}>
                  Canada
                </Link>
              </li>
              <li>
                <Link to="/articles/au" className="item" onClick={toggleMenu}>
                  Australia
                </Link>
              </li>
              <li>
                <Link to="/articles/us" className="item" onClick={toggleMenu}>
                  U.S
                </Link>
              </li>
              <li>
                <Link to="/articles/ru" className="item" onClick={toggleMenu}>
                  RUSSIA
                </Link>
              </li>
              <li>
                <Link to="/articles/uk" className="item" onClick={toggleMenu}>
                  U.K
                </Link>
              </li>
              <li>
                <Link to="/articles/fr" className="item" onClick={toggleMenu}>
                  FRANCE
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/articles/ca" className="item">
                  Canada
                </Link>
              </li>
              <li>
                <Link to="/articles/au" className="item">
                  Australia
                </Link>
              </li>
              <li>
                <Link to="/articles/us" className="item">
                  U.S
                </Link>
              </li>
              <li>
                <Link to="/articles/ru" className="item">
                  RUSSIA
                </Link>
              </li>
              <li>
                <Link to="/articles/uk" className="item">
                  U.K
                </Link>
              </li>
              <li>
                <Link to="/articles/fr" className="item">
                  FRANCE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
