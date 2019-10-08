import React, {Component} from 'react';
import './App.css';
import Person from "./components/Person";


class App extends Component {

  state = {
    persons: [
      {name: "Ana", age: 20},
      {name: "Maria", age: 25, info: "My hobbies are reading and hiking."}
    ],
    title: "My React App"
  };

  addPersonHandler = () => {
    this.setState({
      persons: [
        ...this.state.persons,
        {name: "Grigore", age: 75, info: "Reaching the end... :'("}
      ]
    });
  };

  render() {
    const { persons, title } = this.state;

    return (
      <div className="App">
        <h1>{title}</h1>
        <button onClick={this.addPersonHandler}>Add Person</button>
        {
          persons.map(person =>
              <Person key={person.name} name={person.name} age={person.age}>
                <p>{person.info}</p>
              </Person>
            )
        }
      </div>
    );
  }
}

export default App;