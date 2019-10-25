// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './login.scss';
import Field from 'src/containers/Logs/Field/fieldContainer';

// == Composant
const Login = () => {



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
        />
        <Field
          name="password"
          placeholder="Mot de passe"
          type="password"
          style="login"
        />

        <NavLink exact to="/postlist" exact>
          <button className="login-form-submit login-form-submit--login"  type="submit">Se connecter</button>
        </NavLink>

        </form>

        <NavLink exact to="/sign/inscription" exact>
          <button className="login-form-submit login-form-submit--inscription"  type="button">inscription</button>
        </NavLink>

        <NavLink exact to="/sign/forgot" exact>
          <a className="login-text-link">Mot de passe oublié ?</a>
        </NavLink>


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
