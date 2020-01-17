import React, { Component } from 'react';
import styles from './AddRecipe.module.css';
class AddRecipe extends Component {
	state = {
		title: '',
		ingredients: '',
		instructions: '',
		showAddRecipe: true
	};

	onTitleChange = (e) => {
		this.setState({ title: e.target.value });
	};
	onIngredientsChange = (e) => {
		this.setState({ ingredients: e.target.value });
	};
	onInstructionsChange = (e) => {
		this.setState({ instructions: e.target.value });
	};

	addRecipe = (e) => {
		this.setState({ showAddRecipe: false });
	};
	saveRecipe = (e) => {
		const { title, ingredients, instructions } = this.state;
		const recipe = { title: title, ingredients: ingredients.split(','), instructions: instructions };
		const { addRecipeHandler } = this.props;
		this.setState({ showAddRecipe: true, title: '', ingredients: '', instructions: '' });
		addRecipeHandler(recipe);
	};

	render() {
		const { title, ingredients, instructions, showAddRecipe } = this.state;

		return showAddRecipe ? (
			<div className={styles.addRecipe}>
				<button className="customButton" onClick={this.addRecipe}>
					Add recipe
				</button>
			</div>
		) : (
			<div className={styles.addRecipeForm}>
				<h3>Add recipe</h3>
				<div className={styles.inputBlock}>
					<label>Title: </label>
					<input value={title} onChange={this.onTitleChange} />
				</div>
				<div className={styles.inputBlock}>
					<label>Ingredients: </label>
					<textarea rows="3" cols="30" value={ingredients} onChange={this.onIngredientsChange} />
				</div>
				<div className={styles.inputBlock}>
					<label>Instructions: </label>
					<textarea rows="3" cols="30" value={instructions} onChange={this.onInstructionsChange} />
				</div>
				<div>
					<button className="customButton" onClick={this.saveRecipe}>
						Save recipe
					</button>
				</div>
			</div>
		);
	}
}

export default AddRecipe;
