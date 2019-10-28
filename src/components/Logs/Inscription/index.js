// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local
import './inscription.scss';
import Field from '../Field';
import fieldsData from './fieldsData'


// == Composant

const Inscription = ({}) => {
  
  const datasFields = fieldsData.fields;

    return (
      <div className="inscription">
        <img className="inscription-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
          <h2 className="inscription-subTitle"> Inscription </h2>
          <p className="inscription-text">Merci de bien vouloir remplir ces champs pour vous inscrire</p>
            <form className="inscription-form">
              {datasFields.map((field) => (
                <Field
                    key={field.name}
                    {...field}
                  />
                ))}
                <NavLink exact to="/sign" exact>
                <button className="inscription-form-submit" type="submit">S'inscrire</button>
                </NavLink>
                </form>
                <NavLink exact to="/sign" exact>
                <button className="inscription-retour" type="button">Retour</button>
                </NavLink>
      </div>
    );
  }

//PropTypes
Inscription.propTypes = {
};  

// == Export
export default Inscription;