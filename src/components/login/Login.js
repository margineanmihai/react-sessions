import React, { Component } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

class Login extends Component {
	state = {
		email: 'm1@test.com',
		password: 'mihai1',
		errMsg: ''
	};

	componentDidMount() {
		const userID = localStorage.getItem('userID');
		if (userID) this.props.history.push('/recipes');
	}

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	handleLogin = (response) => {
		console.log('handleLogin response = ', response);
		if (response.status === 200) {
			localStorage.setItem('userID', response.data.id);
			this.props.history.push('/recipes');
		} else {
			this.setState({ errorMsg: response.data.Message });
		}
	};

	login = () => {
		axios
			.post('http://172.22.13.38:1323/users/login', {
				email: this.state.email,
				password: this.state.password
			})
			.then((response) => {
				this.handleLogin(response);
			})
			.catch((error) => {
				console.log('login error = ', error.response);
				this.handleLogin(error.response);
			});
	};
	render() {
		const { email, password, errorMsg } = this.state;
		return (
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
					<button className="customButton" onClick={this.login}>
						Login
					</button>
				</div>
			</div>
		);
	}
}

export default Login;
