// == Import : npm
import React from 'react';

// == Import : local
import './inscription.scss';
import Field from '../Field';


// == Composant
const Inscription = () => {

    return (

  <div className="inscription">
    <img className="inscription-logo" src="public\DumpsterLogos.svg" alt="Logo Gaston Racoon"></img>
      <h2 className="inscription-subTitle"> Inscription </h2>

      <p className="inscription-text">Merci de bien vouloir remplir ces champs pour vous inscrire</p>
      <form className="inscription-form">
        <Field
          name="pseudo"
          placeholder="Pseudonyme"
          type="text"
          style="incription"
        />

        <Field
          name="firstname"
          placeholder="Prénom"
          type="text"
          style="incription"
        />

        <Field
          name="lastname"
          placeholder="Nom de Famille"
          type="text"
          style="incription"
        />

        <Field
          name="email"
          placeholder="Courriel"
          type="email"
          style="incription"
        />

        <Field
          name="password"
          placeholder="Mot de passe"
          type="password"
          style="incription"
        />

        <Field
          name="adresse"
          placeholder="adresse (zone de recherche par défaut)"
          type="text"
          style="incription"
        />

        <Field
          name="tel"
          placeholder="N° de Téléphone (Optionel)"
          type="text"
          style="incription"
        />

        <Field
          name="avatar"
          placeholder="Avatar"
          type="image"
          style="incription"
        />
        <Field
          name="password"
          placeholder="Mot de passe"
          type="password"
          style="incription"
        />
        <button className="inscription-form-submit" type="submit">Se connecter</button>
      </form>
        <button className="inscription-retour" type="submit">Se connecter</button>

</div>

);
    }

// == Export
export default Inscription;