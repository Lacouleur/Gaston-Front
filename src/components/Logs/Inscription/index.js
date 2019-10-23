// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './inscription.scss';
import Field from '../Field';
import fieldsData from './fieldsData'


// == Composant

const Inscription = ({changeHandler, changeView}) => {
  
  const datasFields = fieldsData.fields;
  const clickHandler = changeView('password');
  const clickHandlerBack = changeView('login');

    return (
      <div className="inscription">
        <img className="inscription-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
          <h2 className="inscription-subTitle"> Inscription </h2>
          <p className="inscription-text">Merci de bien vouloir remplir ces champs pour vous inscrire</p>
            <form className="inscription-form">
              {datasFields.map((field) => (
                <Field
                    key={field.name}
                    changeHandler={changeHandler}
                    {...field}
                  />
                ))}
              <button className="inscription-form-submit" onClick={clickHandler} type="submit">Se connecter</button>
            </form>
          <button className="inscription-retour" onClick={clickHandlerBack} type="button">Retour</button>
      </div>
    );
  }

//PropTypes
Inscription.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
};  

// == Export
export default Inscription;