// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './forgot.scss';
import Field from '../Field';


// == Composant
const Forgot = () => {

  // const clickHandlerBack = changeView('login');

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

            <NavLink exact to="/sign/up"exact>
              <button className="forgot-form-submit" type="submit">Réinitialiser</button>
            </NavLink>
            
          </form>
          <NavLink exact to="/sign" exact>
            <button className="forgot-retour" type="button">retour</button> 
          </NavLink>
          
      </div>
    );
}

//PropTypes
Forgot.propTypes = {
};

// == Export
export default Forgot;