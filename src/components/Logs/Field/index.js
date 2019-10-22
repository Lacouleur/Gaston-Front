// == Import : npm
import React from 'react';

// == Import : local
import './field.scss';


// == Composant
const Field = ({
  name,
  placeholder,
  type, 
  style
}) => {

  const className = `field-input-${style}`

    return (
        <div className="field">
        <input
            className= {className}
            name={name}
            type={type}
            required 
            autoComplete="new-password"
            placeholder= {placeholder } 
          /*id= */
          // https://fr.reactjs.org/docs/events.html
          /* onChange={this.changeHandler} */
          /* value={value} */
        />
      </div>

);
    }

// == Export
export default Field;