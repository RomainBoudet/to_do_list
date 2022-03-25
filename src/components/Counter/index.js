import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Counter = ({ taskNumber }) => (
  <p className="todo-counter">
    {taskNumber} {taskNumber > 1 ? 'tâches' : 'tâche'} en cours
  </p>
);

export default Counter;

Counter.propTypes = {
  taskNumber: PropTypes.number.isRequired,
};
