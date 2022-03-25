// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Task from '../Task';
import Counter from '../Counter';
import Form from '../Form';

// == Import data
import data from '../../data/data';

class App extends React.Component {
  state={
    inputTask: 'Text en cours de saisi...',
    list: data,
  }

  handleInputChange = (newValue) => {
    console.log('user a tapé :', newValue);
    this.setState({
      inputTask: newValue,
    });
  }

  handleInputSubmit = () => {
    // je push dans data ma nouvelle data dans mon tableau d'objet
    // avec la valeur false dans ma propriétés done !
    console.log('Un nouvelle objet dans mes données ! ');
  }

  handlecheckTask = (task) => {
  // je passe a true, la propriété 'done' dans mes données, pour la task en paramétre !
    console.log(`La propriété 'done' de la tache ${task.id} doit être passé a ${!task.done} ! `);
  }

  notDoneTaskCount = () => {
    // je calcule le nombre de tache non faîtes !
    const taskNotDone = this.state.list.filter((item) => !item.done);
    return taskNotDone.length;
  }

  render() {
    const { inputTask, list } = this.state;
    return (
      <div className="app">
        <Form
          inputTask={inputTask}
          onChange={this.handleInputChange}
          onFormSubmit={this.handleInputSubmit}
        />
        <Counter taskNumber={this.notDoneTaskCount()} />
        <Task
          list={list}
          key={inputTask}
          onCheck={this.handlecheckTask}
        />
      </div>

    );
  }
}

// == Export
export default App;
