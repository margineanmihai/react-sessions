import React, { Component } from 'react';

class Logout extends Component {
	componentDidMount() {
		const userID = localStorage.getItem('userID');
		if (userID) localStorage.removeItem('userID');
		this.props.history.push('/login');
	}

	render() {
		return <div />;
	}
}

export default Logout;
