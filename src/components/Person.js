import React from 'react';

const person = (props) => {
	return (
		<div>
			<p>
				Hello, I'm <span onClick={props.onNameClick}>{props.name}</span> and I'm {props.age} years old.
			</p>
			<input value={props.name} onChange={props.onNameInputChange} />
		</div>
	);
};

export default person;
