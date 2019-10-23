// Import Local NPM
import React from 'react';

// Import Local
import './navbar.scss';
const NavBar = () => (
  <nav className="navbar">
    <img
      className="navbar-logo"
      src="public\DumpsterLogoswhite.png"
      alt="Logo Gaston Racoon white"
    ></img>
    <p>Gaston</p>
    <button>Ajouter une annonce</button>
  </nav>
);

export default NavBar;
