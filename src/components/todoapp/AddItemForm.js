import React, { Component } from 'react';
import styles from './ToDoApp.module.css';
class AddItemForm extends Component {
	state = {
		title: '',
		details: '',
		dueDate: '',
		showForm: true
	};

	onTitleChange = (e) => {
		this.setState({ title: e.target.value });
	};
	onDetailsChange = (e) => {
		this.setState({ details: e.target.value });
	};
	onDueDateChange = (e) => {
		this.setState({ dueDate: e.target.value });
	};

	addTask = (e) => {
		this.setState({ showForm: false });
	};
	saveTask = (e) => {
		const { title, details, dueDate } = this.state;
		const task = { title: title, details: details, due_date: dueDate };
		const { onAddItem } = this.props;
		this.setState({ showForm: true, title: '', details: '', dueDate: '' });
		onAddItem(task);
	};

	render() {
		const { title, details, dueDate, showForm } = this.state;

		return showForm ? (
			<div className={styles.addTask}>
				<button className="customButton" onClick={this.addTask}>
					Add task
				</button>
			</div>
		) : (
			<div className={styles.itemsContainer}>
				<h3>Add task</h3>
				<div className={styles.inputBlock}>
					<label>Title: </label>
					<input value={title} onChange={this.onTitleChange} />
				</div>
				<div className={styles.inputBlock}>
					<label>Details: </label>
					<textarea rows="3" cols="30" value={details} onChange={this.onDetailsChange} />
				</div>
				<div className={styles.inputBlock}>
					<label>Due date: </label>
					<input type="date" value={dueDate} onChange={this.onDueDateChange} />
				</div>
				<div>
					<button className="customButton" onClick={this.saveTask}>
						Save task
					</button>
				</div>
			</div>
		);
	}
}

export default AddItemForm;
