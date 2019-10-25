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
  fieldState,
  handleInput,
}) => {

  const className = `field-input-${style}`

  console.log('FieldState =',fieldState);

  // const inputValue = fieldState.`${name}`;

  const handleChange = (event) => {
    //console.log("consoleLOG de event.target.value : ", event.target.value);
    const { value, name } = event.target;
    handleInput(value, name);
  }

    return (
        <div className="field">
        <input
            className= {className}
            name={name}
            type={type}
            required 
            autoComplete="off"
            placeholder= {placeholder} 
            onChange={handleChange}
            // value={inputValue}
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
  // inputValue : PropTypes.func.isRequired,
  handleInput : PropTypes.func.isRequired,
};

// Field.defaultProps = {
//   [{name}] : "";

// };

// == Export
export default Field;