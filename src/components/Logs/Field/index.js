// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';


// == Composant
const Field = ({
  name,
  placeholder,
  type, 
  style,
  //value,
  changeHandler
}) => {

  const className = `field-input-${style}`

    return (
        <div className="field">
        <input
            className= {className}
            name={name}
            type={type}
            required 
            autoComplete="off"
            placeholder= {placeholder} 
            onChange={changeHandler}
          /*id= */
          // https://fr.reactjs.org/docs/events.html
          /* onChange={this.changeHandler} */
          /* value={value} */
        />
      </div>

);
    }

//PropTypes

Field.propTypes = {
  name : PropTypes.string.isRequired,
  placeholder : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  style : PropTypes.string.isRequired,
  //value : PropTypes.string.isRequired,
  changeHandler : PropTypes.string.isRequired,
};

// == Export
export default Field;