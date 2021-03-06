import React, { Component } from 'react';

class ToDoItem extends Component {
	render() {
		const { id, label, checked, onItemChange } = this.props;
		return (
			<div>
				<input type="checkbox" checked={checked} onChange={() => onItemChange(id, !checked)} />
				<label>{label}</label>
			</div>
		);
	}
}

export default ToDoItem;
