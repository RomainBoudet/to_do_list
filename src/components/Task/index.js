import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Task = ({ list, onCheck }) => (
  <ul className="todo-list">
    {list.map((item) => (
      <li className={item.done ? 'todo todo--done' : 'todo'} key={item.id}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => {
            onCheck(item);
          }}
        />
        <span className="todo-checkbox">{item.label}</span>
      </li>
    ))}

  </ul>
);

Task.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  onCheck: PropTypes.func.isRequired,

};
export default Task;
