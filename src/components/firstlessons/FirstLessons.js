import React, { Component } from 'react';
import styles from './FirstLessons.module.css';
import classnames from 'classnames';
import Person from './components/person/Person';
import DateMgmt from './components/date/DateMgmt';
import InputMgmt from './components/inputs/InputMgmt';
import DateConditionals from './components/session5/DateConditionals';
import Recipes from './components/recipes/Recipes';
import ToDoApp from './components/todoapp/ToDoApp';

class FirstLessons extends Component {
	render() {
		return (
			<div className={styles.App}>
				<div className={styles.loginContainer}>
					<Register />
					<Login handleLogin={this.handleLogin} errorMsg={this.state.errorMsg} />
				</div>
				<div className="componentStyling">
					{(!!persons || !!title) && (
						<h1 className={classnames(styles.App, styles.App2, { [styles.App3]: title.length > 3 })}>
							{title}
						</h1>
					)}
					<input value={inputText} onChange={this.inputChangeHandler} />
					<p className={styles.inputText}> {inputText}</p>
					<button className="customButton" onClick={this.addPersonHandler}>
						Add Person
					</button>
					{persons.map((person) => (
						<Person
							key={person.id}
							name={person.name}
							age={person.age}
							onNameClick={this.nameClickHandler.bind(this, person.name)}
							onNameInputChange={(event) => this.nameInputChangeHandler(event, person.id)}
						>
							<p>{person.info}</p>
						</Person>
					))}
				</div>
				<div className="componentStyling">
					<h2 className="homeworkTitle">Homework Session 4</h2>
					<h3>Exercise 1</h3>
					<DateMgmt />
					<h3>Exercise 2</h3>
					<InputMgmt />
				</div>
				<DateConditionals styles={styles} />

				<div className="componentStyling">
					<Recipes
						recipes={this.state.recipes}
						addRecipe={this.addRecipeHandler}
						deleteRecipe={this.deleteRecipeHandler}
					/>
				</div>

				<div className="componentStyling">
					<ToDoApp />
				</div>
			</div>
		);
	}
}

export default FirstLessons;
