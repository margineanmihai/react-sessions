import React, { Component, Fragment } from 'react';
import styles from './withNavBar.module.css';
import { NavLink } from 'react-router-dom';

const withNavBar = (WrappedComponent) => {
	return class extends Component {
		handleLogoutClick = () => {
			localStorage.removeItem('userID');
			this.props.history.push('/login');
		};

		render() {
			return (
				<Fragment>
					<div className={styles.navigation}>
						<NavLink to="/recipes">Recipes</NavLink>
						<NavLink to="/todoapp">Todo</NavLink>
						<button onClick={this.handleLogoutClick}>Logout</button>
					</div>
					<WrappedComponent {...this.props} />
				</Fragment>
			);
		}
	};
};

export default withNavBar;
