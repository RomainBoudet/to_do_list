import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Form = ({ inputTask, onChange, onFormSubmit }) => (
  <form onSubmit={(evt) => {
    evt.preventDefault();
    onFormSubmit();
  }}
  >
    <input
      value={inputTask}
      className="todo-input"
      type="text"
      onChange={(evt) => {
        onChange(evt.target.value);
      }}
    />
  </form>
);

export default Form;

Form.propTypes = {
  inputTask: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
