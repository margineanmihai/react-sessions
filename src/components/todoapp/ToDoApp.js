import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddItemForm from './AddItemForm';

class ToDoApp extends Component {
	state = {
		title: 'ToDoApp',
		items: [
			{
				id: 1,
				label: 'dfdsfdsfdsfds',
				checked: false
			},
			{
				id: 2,
				label: 'task2',
				checked: false
			},
			{
				id: 3,
				label: 'task3',
				checked: true
			}
		]
	};

	addItemHandler = (id, label) => {
		const items = this.state.items;
		const newItem = {
			id: id,
			label: label,
			checked: false
		};
		items.push(newItem);
		items.sort((a, b) => (a.checked && !b.checked ? -1 : 0));
		this.setState({ items });
	};

	itemChangedHandler = (id, checked) => {
		const items = this.state.items;
		const checkedItem = items.find((item) => item.id === id);
		checkedItem.checked = checked;
		items.sort((a, b) => (a.checked && !b.checked ? -1 : 0));
		this.setState({ items });
	};

	render() {
		const { title, items } = this.state;
		return (
			<div>
				<ToDoList title={title} items={items} onItemChange={this.itemChangedHandler} />
				<AddItemForm onAddItem={this.addItemHandler} />
			</div>
		);
	}
}

export default ToDoApp;
