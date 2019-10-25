// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './login.scss';
import Field from '../Field';

// == Composant
const Login = ({}) => {
  return (
    <div className="login">
      <img
        className="login-logo"
        src="public\DumpsterLogos.svg"
        alt="Logo Gaston Racoon"
      ></img>
      <h2 className="login-subTitle"> Connexion </h2>

      <p className="login-text">
        Renseignez votre email et votre mot de passe pour vous connecter
      </p>
      <form className="login-form">
        <Field
          name="pseudo"
          placeholder="Pseudo"
          type="text"
          style="login"
          changeHandler={changeHandler}
        />
        <Field
          name="password"
          placeholder="Mot de passe"
          type="password"
          style="login"
          changeHandler={changeHandler}
        />
        <NavLink className="login-form-submit login-form-submit--login" exact to="/login" exact className="welcome-buttonStart">
        Se connecter
        </NavLink>
        <NavLink className="login-form-submit login-form-submit--inscription" exact to="/inscription" exact className="welcome-buttonStart">
        Inscription
        </NavLink>
      </form>
      <a className="login-text-link" onClick={clickHandlerForgot}>
        Mot de passe oublié ?
      </a>
    </div>
  );
};

//PropTypes
Login.propTypes = {
  // changeHandler: PropTypes.func.isRequired,
  // changeView: PropTypes.func.isRequired,
};

// == Export
export default Login;
