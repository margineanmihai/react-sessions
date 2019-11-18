import React, { Fragment } from 'react';

const settings = (props) => {
	return (
		<Fragment>
			<div className="buttons">
				<button className="custom-button" onClick={props.handleIncrement}>
					IncrementD
				</button>
				<button className="custom-button" onClick={props.handleDecrement}>
					DecrementD
				</button>
			</div>
		</Fragment>
	);
};

export default settings;
