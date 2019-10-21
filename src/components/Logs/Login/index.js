// == Import : npm
import React from 'react';
import Field from './Field';

// == Import : local
import './login.scss';


// == Composant
const Login = () => {

    return (
  <div className="login">
  <img className="login-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
    <h1 className="login-appTitle"> Gaston </h1>
    <h2 className="login-subTitle"> Connexion </h2>

    <p className="login-text">Renseignez votre email et votre mot de passe pour vous connecter</p>
    <form className="login-form">
      <Field
        name="email"
        placeholder="Email"
        type="email"
      />
      <Field
        name="password"
        placeholder="Mot de passe"
        type="password"
      />
      <button className="login-form-submit login-form-submit--login" type="submit">Se connecter</button>
    </form>
    <a className="login-text-link">Mot de passe oublié ?</a>

</div>

);
    }

// == Export
export default Login;
