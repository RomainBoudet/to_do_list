import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './style.scss';

const Task = ({
  list, onCheck, onDelete, onFavori,
}) => (
  <ul className="todo-list">
    {list.map((item) => (
      <li
        className={classname({
          todo: true,
          'todo--done': item.done,
          'todo--isFavorite': item.fav,
        })}
        key={item.id}
      >
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => {
            onCheck(item);
          }}
        />
        <span className="todo--text">{item.label}</span>
        <button
          className="todo--remove"
          type="button"
          onClick={() => {
            onDelete(item);
          }}
        >X
        </button>
        <button
          className="todo--remove"
          type="button"
          onClick={() => {
            onFavori(item);
          }}
        >⭐
        </button>
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
  onDelete: PropTypes.func.isRequired,
  onFavori: PropTypes.func.isRequired,

};
export default Task;
