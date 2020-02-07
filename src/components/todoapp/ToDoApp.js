import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddItemForm from './AddItemForm';
import axios from 'axios';
import Nav from '../nav/Nav';
class ToDoApp extends Component {
	state = {
		title: 'ToDoApp',
		todos: []
	};
	componentDidMount() {
		const userID = localStorage.getItem('userID');
		axios
			.get(`http://172.22.13.38:1323/todos/${userID}`)
			.then((response) => {
				this.setState({ todos: response.data });
			})
			.catch((error) => {
				console.log('get todo list error:', error.response.data.Message);
			});
	}

	addTaskHandler = (task) => {
		const userID = localStorage.getItem('userID');
		axios
			.post(`http://172.22.13.38:1323/todos/${userID}`, {
				title: task.title,
				details: task.details,
				due_date: task.due_date
			})
			.then((response) => {
				const todos = [ ...this.state.todos, response.data ];
				this.setState({ todos });
			});
	};

	itemChangedHandler = (id) => {
		axios
			.get(`http://172.22.13.38:1323/todo/${id}/toggle`)
			.then((response) => {
				const todos = this.state.todos;
				const checkedItem = todos.find((item) => item.id === id);
				checkedItem.checked = response.data.checked;
				this.setState({ todos: todos });
			})
			.catch((error) => {
				console.log('todo toggle error:', error.response.data.Message);
			});
	};

	deleteTaskHandler = (id) => {
		axios.delete(`http://172.22.13.38:1323/todo/${id}`).then(() => {
			const todos = this.state.todos.filter((todo) => todo.id !== id);
			this.setState({ todos: todos });
		});
	};

	detailsHandler = (id) => {
		this.props.history.push(`/todo/${id}`);
	};

	render() {
		const { title, todos } = this.state;
		return (
			<div>
				<Nav />
				<div className="container">
					<h3>{title}</h3>
					<ToDoList
						items={todos}
						onItemChange={this.itemChangedHandler}
						onDeleteTask={this.deleteTaskHandler}
						onDetailsClick={this.detailsHandler}
					/>
					<AddItemForm onAddItem={this.addTaskHandler} />
				</div>
			</div>
		);
	}
}

export default ToDoApp;
