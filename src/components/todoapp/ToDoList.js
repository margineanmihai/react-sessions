import React from 'react';
import ToDoItem from './ToDoItem';
import styles from './ToDoApp.module.css';

const ToDoList = (props) => {
	const { items, onItemChange, onDeleteTask, onDetailsClick } = props;
	return Array.isArray(items) && items.length > 0 ? (
		<div className={styles.itemsContainer}>
			{items.map((item) => (
				<ToDoItem
					key={item.id}
					id={item.id}
					label={item.title}
					checked={item.checked}
					onItemChange={onItemChange}
					onDeleteTask={onDeleteTask}
					onDetailsClick={onDetailsClick}
				/>
			))}
		</div>
	) : (
		<div className={styles.itemsContainer}>
			<h4>Your todo list is empty. Use the btn below to add tasks.</h4>
		</div>
	);
};

export default ToDoList;
