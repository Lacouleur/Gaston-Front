// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { logInAction } from 'src/store/middlewares/loginMiddleware';
import { connect } from 'react-redux';
// == Import : local
import './login.scss';

// == Composant
class Login extends React.Component {
  submit = (values) => {
    this.props.logInAction(values, this.props.history);
    console.log(values);
  }
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="login-info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login">
        <img
          className="login-logo"
          src="public\DumpsterLogos.svg"
          alt="Logo Gaston Racoon"
        />
        <h2 className="login-subTitle"> Connexion </h2>

        <p className="login-text">
          Renseignez votre email et votre mot de passe pour vous connecter
      </p>
        <form className="login-form" onSubmit={handleSubmit(this.submit)} >
          <Field
            name="pseudo"
            component="input"
            placeholder="Pseudo"
            type="text"
            //style="login"
          />
          <Field
            name="password"
            component="input"
            placeholder="Mot de passe"
            type="password"
            //style="login"
          />

          {/*<NavLink exact to="/postlist" exact>*/}
          <button type="submit" className="login-form-submit login-form-submit--login">Se connecter</button>
          {/*</NavLink>*/}

        </form>
      {this.errorMessage()}
        <NavLink exact to="/sign/inscription">
          <button className="login-form-submit login-form-submit--inscription" type="button">inscription</button>
        </NavLink>

        <NavLink exact to="/sign/forgot" className="login-text-link">
          Mot de passe oublié ?
        </NavLink>


      </div>
    );
  };
};
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
const reduxFormLogin = reduxForm({
  form: 'login'
})(Login);

export default connect(mapStateToProps, {logInAction})(reduxFormLogin);

//PropTypes
Login.propTypes = {
  // changeHandler: PropTypes.func.isRequired,
  // changeView: PropTypes.func.isRequired,
};

// // == Export
// export default reduxForm({
//   form: 'login'
// })(Login);