// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { registerAction } from 'src/store/middlewares/registerMiddleware';
import { connect } from 'react-redux';
// == Import : local
import './register.scss';
import fieldsData from './fieldsData';
import AdressSearch from 'src/containers/AdressSearch';

/*

Nous voulons une autocomplétion du champ adresse par l'API gouvernement, et récupérer les information nécessaires : "latitude" "longitude" associé à l'adresse. 

DONE 1- On a un champ "input adresse" dans le composant Inscription
DONE 2- On doit avoir un composant <AdresseSearch /> branché dans Inscription (qui se connecte à l'adresse du gouvernement)
DONE 2-1 Le composant AdressSearch fait une requete axios à la volée (sugestion de complétion du champ adresse) pour choisir une adresse (api gouvernement consulté à chaque frappe).
          -> le but est de recevoir lagitude et Longitude pour faire fonctionner le composant Map. 
DONE 2-2 La donnée est envoyé dans le state (reducer) de AdresseSearch => {adresseProps : "2 rue de la ville" , "Latitude : 01.2.535.2", "longitude : 01.2.535.2"}
DONE 3- La props Adresse props adressePros est lue dans le container d'Inscription. -> adresseProps : 'state.adresseSearch.adresseProps'
DONE 3-1 Le container de Inscription envoi la props au composant Inscription. 
DONE 3-2 Le composant inscription affecte la nouvelle valeur à l'input adresse value={this.props.adressProps}
DONE 4- La fonction onSubmit du formulaire, soumet le form avec la nouvelle valeur. 
4-1 Une requête Axios d'inscripion est validée. <-- le champ "adresse" n'apparait pas dans le console.log des adresses envoyés

PROBLEME : 
A la soumission, aucune valeur n'est reçue par notre champ Input Adresse


arr = {toto, tata, tutu}
arr1 = {titi, tété, ...arr}

=> output arr1 = {titi, tété, toto, tata, tutu}

*/

// == Composant
class Register extends React.Component {
  submit = (values) => {
    const { addressLabel, lat, lng } = this.props;
    const latitude = { lat: parseFloat(lat) };
    const longitude = { lng: parseFloat(lng) };
    const allValues = { ...values, addressLabel, ...latitude, ...longitude };
    this.props.registerAction(allValues, this.props.history);
    console.log('Value soumission:', allValues);
  };
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="inscription-info-red">{this.props.errorMessage}</div>
      );
    }
  }

  render() {
    // Field infos import from ./fieldsdata
    const { handleSubmit, adresse } = this.props;
    const datasFields = fieldsData.fields;
    return (
      <div className="inscription">
        <img
          className="inscription-logo"
          src="/public/DumpsterLogos.svg"
          alt="Logo Gaston Racoon"
        ></img>
        <h2 className="inscription-subTitle"> Inscription </h2>
        <p className="inscription-text">
          Merci de bien vouloir remplir ces champs pour vous inscrire
        </p>
        {this.errorMessage()}
        <form
          className="inscription-form"
          onSubmit={
            handleSubmit(this.submit) /* handleSubmit comming from Redux-Form */
          }
        >
          {datasFields.map((field) => (
            <Field
              key={field.name}
              name={field.name}
              component="input"
              placeholder={field.placeholder}
              type={field.type}
            />
          ))}
          <AdressSearch />
          <button className="inscription-form-submit" type="submit">
            S'inscrire
          </button>
        </form>

        {this.errorMessage()}
        <NavLink exact to="/sign/in" exact>
          <button className="inscription-retour" type="button">
            Retour
          </button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error,
    addressLabel: state.adressSearch.queryInput,
    lat: state.adressSearch.lat,
    lng: state.adressSearch.lon,
  };
};

const reduxFormRegister = reduxForm({
  form: 'register',
})(Register);

export default connect(
  mapStateToProps,
  { registerAction },
)(reduxFormRegister);

//PropTypes
Register.propTypes = {};
