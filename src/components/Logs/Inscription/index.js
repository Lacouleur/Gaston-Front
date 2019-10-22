// == Import : npm
import React from 'react';

// == Import : local
import './inscription.scss';
import Field from '../Field';
import fieldsData from './fieldsData'


// == Composant

const Inscription = ({changeHandler, changeView}) => {
  
  const datasFields = fieldsData.fields;
  const clickHandler = changeView('password');
  const clickHandlerRetour = changeView('login');

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
        <button className="inscription-form-submit" type="submit">Se connecter</button>
      </form>
        <button className="inscription-retour" type="submit">Retour</button>

</div>

);
    }

// == Export
export default Inscription;