import React, { Component } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

class Register extends Component {
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

	register = () => {
		axios
			.post('http://172.22.13.38:1323/users', {
				email: this.state.email,
				password: this.state.password
			})
			.then((response) => {
				console.log('register response = ', response);
			});
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className={styles.card}>
				<h3>Register Form</h3>

				<div className={styles.inputBlock}>
					<label>Email: </label>
					<input value={email} onChange={this.onEmailChange} />
				</div>

				<div className={styles.inputBlock}>
					<label>Password: </label>
					<input type="password" value={password} onChange={this.onPasswordChange} />
				</div>

				<div className={styles.centerBtn}>
					<button className="customButton" onClick={this.register}>
						Save
					</button>
				</div>
			</div>
		);
	}
}

export default Register;
