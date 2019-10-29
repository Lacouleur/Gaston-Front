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

// 1- Comment on récupè_re le state de Field ?
//    /---> state.field
//      Essayer un console.log de state.field <- Normalement c'est un objet.
// 2- ajouter une fonction "onSubmit" sur le forme, et balancer notre state au middleware.
// 3- Trouver le bon format de donné pour l'envoi + Gestions des messages d'erreurs.

// == Composant
class Register extends React.Component {
  submit = (values) => {
    this.props.registerAction(values, this.props.history);
    console.log("i'm value in Register.component values", values)  };
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="inscription-info-red">{this.props.errorMessage}</div>
      );
    }
  }

  render() {
    // Field infos import from ./fieldsdata
    const { handleSubmit } = this.props;
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormRegister = reduxForm({
  form: 'register',
})(Register);

export default connect(
  mapStateToProps,
  { registerAction },
)(reduxFormRegister);

//PropTypes
Register.propTypes = {};
