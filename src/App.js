import React, { Component } from 'react';
import styles from './App.module.css';
import Recipes from './components/recipes/Recipes';
import Register from './components/login/Register';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import ToDoApp from './components/todoapp/ToDoApp';
import ToDoDetails from './components/todoapp/ToDoDetails';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './routing/PrivateRoute';

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
		return (
			<BrowserRouter>
				<div className={styles.componentStyling}>
					<div className={styles.navigation}>
						<NavLink exact to="/">
							Login{' '}
						</NavLink>
						<NavLink to="/register">Register</NavLink>
						<NavLink to="/todoapp">ToDoApp</NavLink>
						<NavLink to="/recipes">Recipes</NavLink>
						<NavLink to="/logout">Logout</NavLink>
					</div>
					<Route path="/" exact component={Login} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<PrivateRoute path="/todoapp" component={ToDoApp} />
					<PrivateRoute path="/todo/:id" component={ToDoDetails} />
					<PrivateRoute path="/recipes" component={Recipes} />
					<Route path="/logout" component={Logout} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
