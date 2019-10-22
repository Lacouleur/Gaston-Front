// == Import : npm
import React from 'react';

// == Import : local
import './inscription.scss';
import Field from '../Field';
import fieldsData from './fieldsData'


// == Composant

const Inscription = ({value, changeHandler}) => {
  
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
        <button className="inscription-form-submit" type="submit">Se connecter</button>
      </form>
        <button className="inscription-retour" type="submit">Se connecter</button>

</div>

);
    }

// == Export
export default Inscription;