import React, { Fragment } from 'react';
import ToDoItem from './ToDoItem';
import styles from './ToDoApp.module.css';

const ToDoList = (props) => {
	const {title, items, onItemChange} = props;
	return (
        <Fragment>
            <h3>{title}</h3>
            <div className={styles.itemContainer}>
                {items.map((item) => (
                    <ToDoItem
                        key={item.id}
                        id = {item.id}
                        label={item.label}
                        checked={item.checked}
                        onItemChange={onItemChange}
                    />
                ))}
            </div>
		</Fragment>
	);
};

export default ToDoList;