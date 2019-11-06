import React, { Fragment } from 'react';

const settings = (props) => {
	return (
		<Fragment>
			<p>
				<button onClick={props.handleIncrement}>IncrementD</button>
				<button onClick={props.handleDecrement}>DecrementD</button>
			</p>
		</Fragment>
	);
};

export default settings;
