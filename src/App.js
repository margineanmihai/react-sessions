import React, { Component } from 'react';
// import './App.css';
import styles from './App.module.css';
import classnames from 'classnames';
import Person from './components/person/Person';
import DateMgmt from './components/date/DateMgmt';
import InputMgmt from './components/inputs/InputMgmt';
import DateConditionals from './components/session5/DateConditionals';
import Recipes from './components/recipes/Recipes';
import ToDoApp from './components/todoapp/ToDoApp';

class App extends Component {
	state = {
		persons: [
			{ id: 1, name: 'Ana', age: 20 },
			{ id: 2, name: 'Maria', age: 25, info: 'My hobbies are reading and hiking.' }
		],
		title: 'My React App',
		inputText: 'Initial text'
	};

	addPersonHandler = () => {
		this.setState({
			persons: [ ...this.state.persons, { name: 'Grigore', age: 75, info: "Reaching the end... :'(" } ]
		});
	};

	nameClickHandler = (name) => {
		console.log('name clicked: ', name);
	};

	inputChangeHandler = (event) => {
		this.setState({ inputText: event.target.value });
	};

	nameInputChangeHandler = (event, id) => {
		const persons = [ ...this.state.persons ];
		const changedPerson = persons.find((person) => person.id === id);
		changedPerson.name = event.target.value;

		this.setState({ persons });
	};

	render() {
		const { persons, title, inputText } = this.state;
		return (
			<div className={styles.App}>
				<div className="componentStyling">
					{(!!persons || !!title) && (
						<h1 className={classnames(styles.App, styles.App2, { [styles.App3]: title.length > 3 })}>
							{title}
						</h1>
					)}
					<input value={inputText} onChange={this.inputChangeHandler} />
					<p className={styles.inputText}> {inputText}</p>
					<button className="customButton" onClick={this.addPersonHandler}>
						Add Person
					</button>
					{persons.map((person) => (
						<Person
							key={person.id}
							name={person.name}
							age={person.age}
							onNameClick={this.nameClickHandler.bind(this, person.name)}
							onNameInputChange={(event) => this.nameInputChangeHandler(event, person.id)}
						>
							<p>{person.info}</p>
						</Person>
					))}
				</div>
				<div className="componentStyling">
					<h2 className="homeworkTitle">Homework Session 4</h2>
					<h3>Exercise 1</h3>
					<DateMgmt />
					<h3>Exercise 2</h3>
					<InputMgmt />
				</div>
				<DateConditionals styles={styles} />

				<div className="componentStyling">
					<Recipes />
				</div>

				<div className="componentStyling">
					<ToDoApp />
				</div>
			</div>
		);
	}
}

export default App;
