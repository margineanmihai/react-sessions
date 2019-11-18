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
		const nameColor = name.length < 5 ? 'green' : 'orange';
		const emailColor = email.length < 4 ? 'green' : 'orange';
		const phoneColor = phone.length < 4 ? 'green' : 'orange';
		const textStyle = {
			nameColor: {
				color: nameColor
			},
			emailColor: {
				color: emailColor
			},
			phoneColor: {
				color: phoneColor
			}
		};
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
					Name: <span style={textStyle.nameColor}>{name} </span> - Email:{' '}
					<span style={textStyle.emailColor}>{email} </span> - Phone:{' '}
					<span style={textStyle.phoneColor}>{phone} </span>
				</p>
			</Fragment>
		);
	}
}

export default InputMgmt;
