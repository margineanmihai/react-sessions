import React, { Component } from 'react';
import Recipe from './Recipe';
import styles from './Recipes.module.css';
import AddRecipe from './AddRecipe';
import axios from 'axios';

class Recipes extends Component {
	state = {
		recipes: []
	};

	componentDidMount() {
		const { recipes } = this.props;
		this.setState({ recipes });
	}

	render() {
		const { recipes, addRecipe, deleteRecipe } = this.props;
		return Array.isArray(recipes) && recipes.length > 0 ? (
			<div>
				<h3>Recipes</h3>
				<div className={styles.recipesContainer}>
					{recipes.map((recipe) => (
						<Recipe
							key={recipe.id}
							title={recipe.title}
							ingredients={recipe.ingredients}
							instructions={recipe.instructions}
							deleteClickHandler={() => deleteRecipe(recipe.id)}
						/>
					))}
				</div>
				<AddRecipe addRecipeHandler={addRecipe} />
			</div>
		) : (
			<div>
				<h3>Recipes</h3>
				<h4>There are no recipes</h4>
				<AddRecipe addRecipeHandler={addRecipe} />
			</div>
		);
	}
}

export default Recipes;
