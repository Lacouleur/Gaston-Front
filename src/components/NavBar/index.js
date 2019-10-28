// Import Local NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// Import Local
import './navbar.scss';
import AdressSearch from 'src/components/AdressSearch';
import {
  postListButton,
  addPostButton,
  signOutButton,
  profilUserButton,
  signInButton,
  signUpButton,
} from './ressources';
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

class Navbar extends React.Component {
  // const clickHandler = changeView('addPost');
  navbarLinks() {
    //CASE IS CONNECTED
    if (this.props.authenticated) {
      return [
        //(see ./ressources.js)
        postListButton,
        addPostButton,
        signOutButton,
        profilUserButton,
      ];
    }
    //CASE NON-CONNECTE
    return [
      //(see ./ressources.js)
      signInButton,
      signUpButton,
    ];
  }

  render() {
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
        {this.navbarLinks()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}
export default connect(mapStateToProps)(Navbar);
