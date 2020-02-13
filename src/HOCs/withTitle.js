import React, { Component } from 'react';

const withTitle = (WrappedComponent, title) => {
	return class extends Component {
		render() {
			return (
				<div>
					<h3> {title} </h3>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	};
};

export default withTitle;
