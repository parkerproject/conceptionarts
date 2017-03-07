import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

renderField.propTypes = {
  input: React.PropTypes.element,
  label: React.PropTypes.element,
  type: React.PropTypes.string,
  meta: React.PropTypes.object,
};

export default renderField;
