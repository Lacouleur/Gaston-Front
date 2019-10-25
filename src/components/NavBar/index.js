// Import Local NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
// Import Local
import './navbar.scss';

//  Composant
const NavBar = () => {
  // const clickHandler = changeView('addPost');

  return (
    <nav className="navbar">

    {/* // LOGO GASTON */}
      <NavLink
        to="/"
        exact
        activeClassName="navigation-item--active"
        className="navigation-item"
      >
        <img
          className="navbar-logo"
          src="public\DumpsterLogoswhite.png"
          alt="Logo Gaston Racoon white"
        />
      </NavLink>

    {/* //Ajout Annonce  */}
      <NavLink
        to="/addpost"
        exact
        activeClassName="navigation-item--active"
        className="navigation-item"
      >
        <button className="navbar-button-addpost" type="button">
          Ajouter une annonce
        </button>
      </NavLink>
 
     {/* //Fil d'actualités  */}
      <NavLink
        to="/postlist"
        exact
        activeClassName="navigation-item--active"
        className="navigation-item"
      >
        <button className="navbar-button-postlist" type="button">
          Fil d'actualités
        </button>
      </NavLink>


      {/* // PORTRAIT */}
      <NavLink
        to="/user"
        exact
        activeClassName="navigation-item--active"
        className="navigation-item"
      >
        <img
          className="navbar-profile"
          src="public\petit-raton-laveur.jpg"
          alt="image profile"
        />
      </NavLink>
    </nav>
  );
};

export default NavBar;
