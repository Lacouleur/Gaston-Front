// == Import : npm
import React from 'react';

// == Import : local
import './forgot.scss';
import Field from '../Field';


// == Composant
const Forgot = ({changeView}) => {

  const clickHandlerBack = changeView('login');

    return (
  <div className="forgot">

  <img className="forgot-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
    <h2 className="forgot-subTitle"> Mot de passe oublié </h2>

    <p className="forgot-text">Veuillez entrer votre courriel pour réinitialiser votre mot de passe</p>
    <form className="forgot-form">
      <Field
        name="email-forgot"
        placeholder="Courriel"
        type="email"
        style="forgot"
      />

      <button className="forgot-form-submit" type="submit">Réinitialiser</button>
    </form>
      <button className="forgot-retour" onClick={clickHandlerBack} type="button">retour</button>
  </div>
);
    }

// == Export
export default Forgot;