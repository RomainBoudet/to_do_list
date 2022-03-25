import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Form extends React.Component {
  // https://fr.reactjs.org/docs/refs-and-the-dom.html
  inputRef = React.createRef();

  componentDidMount() {
    // mettre un focus dans l'input au chargement de mon composant.
    // je pourrait localiser mon input dans le dom et coller un.focus()
    // mais puisque j'ai crée cette div, en React je peut
    // lui mettre une référence:  je créer une ref dans ma class :> this.myRef = React.CreateREf();
    // et dans mon reder, mettre l'attribut ref sur ma balise avec comme props : this.myRef.current
    this.inputRef.current.focus();
  }

  render() {
    // accés au props dans une class :
    const { inputTask, onChange, onFormSubmit } = this.props;
    return (
      <form onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit();
      }}
      >
        <input
          ref={this.inputRef}
          placeholder="Saisir une tâche..."
          value={inputTask}
          className="todo-input"
          type="text"
          onChange={(evt) => {
            onChange(evt.target.value);
          }}
        />
      </form>
    );
  }
}

Form.propTypes = {
  inputTask: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
