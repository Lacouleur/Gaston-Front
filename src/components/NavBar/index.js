// Import Local NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
// Import Local
import './navbar.scss';
import AdressSearch from 'src/components/AdressSearch';

/*


CONNECTE
Dans le cas "connecté" -> affiche Postlist button
Dans le cas "connecté" -> affiche addPost button
Dans le cas "connecté" -> affiche Sign OUT

#####case CONNECTE######### [PostList] ##### [ajouter une annonce]####### bonjour "Jesus" - se déconnecter - AVATAR
                                                                                  <-----------/

NON CONNECTE
Dans le cas "non connecté " -> affiche signin button
Dans le cas "non connecté " -> affiche signupbutton

#####case NON CONNECTE######### [Se connecte] ##### [s'inscrire]####### PAS DAVATAR

*/
//  Composant
const NavBar = () => {
  // const clickHandler = changeView('addPost');
  const navbarLinks = () => {
    //CASE IS CONNECTED
    if (this.props.authenticated) {
      return [
        //POSTLIST BUTTON
        <NavLink
          to="/postlist"
          exact
          activeClassName="navigation-item--active"
          className="navigation-item"
        >
          <button className="navbar-button-addpost" type="button">
            Fil d'actualités
          </button>
        </NavLink>,

        //ADDPOST BUTTON
        <NavLink
          to="/addpost"
          exact
          activeClassName="navigation-item--active"
          className="navigation-item"
        >
          <button className="navbar-button-addpost" type="button">
            Ajouter une annoncer
          </button>
        </NavLink>,
        
        //signinOUT BUTTON
        <NavLink
          to="/signout"
          exact
          activeClassName="navigation-item--active"
          className="navigation-item"
        >
          <button className="navbar-button-addpost" type="button">
            Se déconnecter
          </button>
        </NavLink>,

        //PROFIL USER
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
        </NavLink>,
      ];
    }
    return [
      <NavLink
        to="/sign"
        exact
        activeClassName="navigation-item--active"
        className="navigation-item"
      >
        <button className="navbar-button-postlist" type="button">
          Se connecter
        </button>
      </NavLink>,

      <li key="signup">
        <Link to="/sign/up">Sign up</Link>
      </li>,
    ];
  };

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
      <NavLink
        to="/sign/in"
        exact
        activeClassName="navigation-item--active"
        className="navigation-item"
      >
        <button className="navbar-button-postlist" type="button">
          Se connecter
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
