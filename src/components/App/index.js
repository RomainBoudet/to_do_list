// Ce composant est un container à composants, dans lequel je mettrais tous mes autres composants.
// Et cet unique composant App sera rendu via la méthode render dans le fichier index.js
// situé a la racine du fichier src.
// == Import npm
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// == Import
import './styles.scss';
import Task from '../Task';
import Counter from '../Counter';
import Form from '../Form';

// == Import data
import data from '../../data/data';

class App extends React.Component {
  state={
    inputTask: '',
    list: data,
  }

  handleInputChange = (newValue) => {
    this.setState({
      inputTask: newValue,
    });
  }

  handleInputSubmit = () => {
    // je met a jour mon state avec un nouvel objet en plus.
    // avec la valeur false dans ma propriétés done !
    const { inputTask, list } = this.state;
    const newTask = {
      id: uuidv4(),
      label: inputTask,
      done: false,
    };
    // j'utilise le reste opértor, et je met le new task en premier.
    // Puis je met a jour mon state.
    this.setState({
      list: [newTask, ...list],
      inputTask: '',
    });
  }

  handlecheckTask = (task) => {
  // je passe a true, la propriété 'done' dans mes données, pour la task en paramétre !
    const { list } = this.state;
    const newList = list.map((item) => {
      if (task.id === item.id) {
        const newObj = {
          ...item, // je récupére le contenu de l'objet !
          done: !item.done, // j'écrase la propriété done avec une nouvelle valeur décidé !
        };
        return newObj;
      }
      return item;
    });

    this.setState({
      list: newList,
    });
  }

  notDoneTaskCount = () => {
    // je calcule le nombre de tache non faîtes !
    const taskNotDone = this.state.list.filter((item) => !item.done);
    return taskNotDone.length;
  }

  // Une fonction filter !
  // une fonction qui me sort mes tache avec les done en dernier !
  getToDoSorted = () => {
    const { list } = this.state;
    const notDone = list.filter((item) => !item.done);
    const done = list.filter((item) => item.done);
    const newList = [...notDone, ...done];
    return newList;
  }

  render() {
    const { inputTask } = this.state;
    return (
      <div className="app">
        <Form
          inputTask={inputTask}
          onChange={this.handleInputChange}
          onFormSubmit={this.handleInputSubmit}
        />
        <Counter taskNumber={this.notDoneTaskCount()} />
        <Task
          list={this.getToDoSorted()}
          key={inputTask}
          onCheck={this.handlecheckTask}
        />
      </div>

    );
  }
}

// == Export
export default App;
