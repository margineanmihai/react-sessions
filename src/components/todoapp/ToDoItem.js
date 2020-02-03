import React, { Component } from 'react';
import styles from './ToDoApp.module.css';
class ToDoItem extends Component {
	render() {
		const { id, label, checked, onItemChange, onDeleteTask, onDetailsClick } = this.props;
		return (
			<div className={styles.itemContainer}>
				<input type="checkbox" checked={checked} onChange={() => onItemChange(id)} />
				<label>{label}</label>
				<button onClick={() => onDeleteTask(id)}>Delete</button>
				<button onClick={() => onDetailsClick(id)}>Details</button>
			</div>
		);
	}
}

export default ToDoItem;
