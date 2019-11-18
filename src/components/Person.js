import React, { Component } from 'react';
import './Person.css';
class Person extends Component {
	state = {
		inputShowing: false
	};

	editNameHandler = () => {
		this.setState({ inputShowing: !this.state.inputShowing });
	};
	okBtnHandler = () => {
		this.setState({ inputShowing: !this.state.inputShowing });
	};
	render() {
		const { onNameClick, name, age, onNameInputChange } = this.props;
		const { inputShowing } = this.state;
		// console.log(inputShowing);
		return (
			<div>
				<p className="person">
					Hello, I'm{' '}
					<span className="insertedText" onClick={onNameClick}>
						{name}
					</span>{' '}
					and I'm {age} years old.
				</p>
				{!inputShowing && (
					<button className="custom-button" onClick={this.editNameHandler}>
						Edit Name
					</button>
				)}
				{inputShowing && (
					<div>
						<input value={name} onChange={onNameInputChange} />
						<button className="custom-button" onClick={this.okBtnHandler}>
							OK
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default Person;
