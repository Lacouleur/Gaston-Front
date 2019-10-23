// == Import : npm
import React from 'react';


// == Import : local
import './login.scss';
import Field from '../Field';


// == Composant
const Login = ({changeView}) => {

  const clickHandler = changeView('PostsList', 'PostsList' );
  const clickHandlerForgot = changeView('forgot');
  const clickHandlerInscription = changeView('inscription')
    return (
  <div className="login">
  <img className="login-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
    <h2 className="login-subTitle"> Connexion </h2>

    <p className="login-text">Renseignez votre email et votre mot de passe pour vous connecter</p>
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
      <button className="login-form-submit login-form-submit--login" onClick={clickHandler} type="submit">Se connecter</button>
      <button className="login-form-submit login-form-submit--inscription" onClick={clickHandlerInscription} type="submit">Inscription</button>
    </form>
    <a className="login-text-link" onClick={clickHandlerForgot} >Mot de passe oublié ?</a>

</div>

);
    }

// == Export
export default Login;
