// == Import : npm
import React from 'react';

// == Import : local
import './login.scss';


// == Composant
const Login = () => {

    return (
        <div className="login-form-field">
        <input
            className= 'login-form-field-input'
            name='Pseudo'
            type='email'
            required 
            autoComplete="new-password"
            placeholder= 'Courriel' 
          /*id= */
          // https://fr.reactjs.org/docs/events.html
          /* onChange={this.changeHandler} */
          /* value={value} */
        />
      </div>

);
    }

// == Export
export default Login;



