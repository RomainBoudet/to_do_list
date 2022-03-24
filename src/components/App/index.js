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

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Counter />
    <Task />
  </div>
);

// == Export
export default App;
