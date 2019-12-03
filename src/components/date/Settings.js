import React, { Fragment } from 'react';
import appStyles from '../../App.module.css';

const settings = (props) => {
	return (
		<Fragment>
			<div className={appStyles.buttons}>
				<button className="customButton" onClick={props.handleIncrement}>
					IncrementD
				</button>
				<button className="customButton" onClick={props.handleDecrement}>
					DecrementD
				</button>
			</div>
		</Fragment>
	);
};

export default settings;
