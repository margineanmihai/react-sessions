import React, { Component, Fragment } from 'react';

class InputMgmt extends Component {
	state = {
		name: '',
		email: '',
		phone: ''
	};

	nameChangeHandler = (event) => {
		this.setState({ name: event.target.value });
	};
	emailChangeHandler = (event) => {
		this.setState({ email: event.target.value });
	};
	phoneChangeHandler = (event) => {
		this.setState({ phone: event.target.value });
	};

	render() {
		const { name, email, phone } = this.state;
		return (
			<Fragment>
				<p>
					<label>Name: </label>
					<input value={name} onChange={this.nameChangeHandler} />
				</p>
				<p>
					<label>Email: </label>
					<input value={email} onChange={this.emailChangeHandler} />
				</p>
				<p>
					<label>Phone: </label>
					<input value={phone} onChange={this.phoneChangeHandler} />
				</p>

				<p>
					Name: {name} - Email: {email} - Phone: {phone}
				</p>
			</Fragment>
		);
	}
}

export default InputMgmt;
