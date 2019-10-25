// Import Local NPM
import React from 'react';

// Import Local
import './navbar.scss';

//  Composant
const NavBar = () =>  {

  
  // const clickHandler = changeView('addPost');

  return (
    <nav className="navbar">
    <img className="navbar-logo" src="public\DumpsterLogoswhite.png" alt="Logo Gaston Racoon white"></img>
    <button className= "button-post"  type="button">Ajouter une annonce</button>
    <p>
      <img 
      className="navbar-profile"
      src="public\petit-raton-laveur.jpg"
      alt="image profile"
      ></img> 
    </p>
    

  </nav>
);

}

export default NavBar;
