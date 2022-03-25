import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Counter = ({ taskNumber }) => (
  <p className="todo-counter">
    {taskNumber} {taskNumber > 1 ? 'tâches' : 'tâche'} en cours
  </p>
);

export default Counter;

// exemple de propType : ou ingredients est un tableau d'objets passé a mon compasant
// avec 4 clé valeurs, ou je definis le type de chaque clés !
/* Ingredients.propTypes = {

  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}; */

Counter.propTypes = {
  taskNumber: PropTypes.number.isRequired,
};
