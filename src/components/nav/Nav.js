import React, { Component } from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	render() {
		const isLogged = !!localStorage.getItem('userID');
		return (
			<div className={styles.navigation}>
				{!isLogged && (
					<NavLink exact to="/">
						Login
					</NavLink>
				)}
				{!isLogged && <NavLink to="/register">Register</NavLink>}
				{isLogged && <NavLink to="/todoapp">ToDoApp</NavLink>}
				{isLogged && <NavLink to="/recipes">Recipes</NavLink>}
				{isLogged && <NavLink to="/logout">Logout</NavLink>}
			</div>
		);
	}
}

export default Nav;
