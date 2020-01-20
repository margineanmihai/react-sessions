import React, { Component } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	login = () => {
		const { handleLogin } = this.props;
		axios
			.post('http://172.22.13.38:1323/users/login', {
				email: this.state.email,
				password: this.state.password
			})
			.then((response) => {
				console.log('login response = ', response);
				handleLogin(response);
			})
			.catch((error) => {
				console.log('login error = ', error.response);
				handleLogin(error.response);
			});
	};
	render() {
		const { email, password } = this.state;
		const { errorMsg } = this.props;
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
				<div>
					<button className="customButton" onClick={this.login}>
						Login
					</button>
				</div>
			</div>
		);
	}
}

export default Login;
