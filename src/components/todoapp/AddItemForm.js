import React, { Component } from 'react';
import styles from './ToDoApp.module.css';

class AddItemForm extends Component {
    state = {
        label: "",
        showAddTask: true
    }
    onLabelChange = (e) => {
		this.setState({ label: e.target.value });
    };
    
    addTask = (e) => {
		this.setState({ showAddTask: false });
    };

    saveTask = () => {
        const { onAddItem } = this.props;
        this.setState({showAddTask:true});
        onAddItem(Math.random(),this.state.label)
    }
    
    render() {
        const {showAddTask} = this.state;
        return showAddTask ? (
			<div className={styles.addTask}>
				<button className="customButton" onClick={this.addTask}>
					Add Task
				</button>
			</div>
		) : (
            <div className={styles.addForm}>
                <label>New task: </label>
                <input type="text" onChange={this.onLabelChange} />
                <button className="customButton" onClick={this.saveTask}>
                    Save
                </button>
            </div>
        )
    }
}

export default AddItemForm;