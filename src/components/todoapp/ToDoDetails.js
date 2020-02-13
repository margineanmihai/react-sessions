import React, { Component, Fragment } from 'react';
import styles from './ToDoApp.module.css';
import withNavBar from '../../HOCs/withNavBar';
import withTitle from '../../HOCs/withTitle';
import axios from 'axios';

class ToDoDetails extends Component {
	state = {
		todo: null
	};

	componentDidMount() {
		axios.get(`http://172.22.13.38:1323/todo/${this.props.match.params.id}`).then((response) => {
			this.setState({ todo: response.data });
		});
	}

	render() {
		const { todo } = this.state;

		return (
			<Fragment>
				{todo ? (
					<div className={styles.itemsContainer}>
						<h3>Task: {todo.title}</h3>
						<h4>Details</h4>
						<p>{todo.details}</p>
						<h4>Due Date</h4>
						<p>{todo.due_date}</p>
					</div>
				) : (
					<div>No todo found.</div>
				)}
			</Fragment>
		);
	}
}

export default withNavBar(withTitle(ToDoDetails, 'Todo item details with HOC'));
