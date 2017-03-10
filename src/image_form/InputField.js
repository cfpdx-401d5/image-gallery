import React, { PropTypes } from 'react';

function InputField(props) {
  return (
    <input
      name={props.name}
      type='text'
      placeholder={`Enter ${props.name}`}
      defaultValue=''
      onChange={props.handler}
    />
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default InputField;
