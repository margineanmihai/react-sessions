import React, { Component } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { Redirect } from 'react-router-dom';
import Nav from '../nav/Nav';

class Login extends Component {
	state = {
		email: 'm1@test.com',
		password: 'mihai1',
		errMsg: ''
	};

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	loginHandler = () => {
		axios
			.post('http://172.22.13.38:1323/users/login', {
				email: this.state.email,
				password: this.state.password
			})
			.then((response) => {
				localStorage.setItem('userID', response.data.id);
				this.props.history.push('/recipes');
			})
			.catch((error) => {
				this.setState({ errorMsg: error.response.data.Message });
			});
	};
	render() {
		const { email, password, errorMsg } = this.state;
		const isLogged = !!localStorage.getItem('userID');
		return !isLogged ? (
			<div>
				<Nav />
				<div className={styles.card}>
					<h3>Login</h3>

					<div className={styles.inputBlock}>
						<label>Email: </label>
						<input value={email} onChange={this.onEmailChange} />
					</div>

					<div className={styles.inputBlock}>
						<label>Password: </label>
						<input type="password" value={password} onChange={this.onPasswordChange} />
					</div>
					{errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
					<div className={styles.centerBtn}>
						<button className="customButton" onClick={this.loginHandler}>
							Login
						</button>
					</div>
				</div>
			</div>
		) : (
			<Redirect to="/recipes" />
		);
	}
}

export default Login;
