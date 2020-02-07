import React, { Component } from 'react';
import Recipe from './Recipe';
import styles from './Recipes.module.css';
import AddRecipe from './AddRecipe';
import withNavBar from '../../HOCs/withNavBar';
import axios from 'axios';

class Recipes extends Component {
	state = {
		recipes: []
	};

	componentDidMount() {
		const userID = localStorage.getItem('userID');
		axios
			.get(`http://172.22.13.38:1323/recipes/${userID}`)
			.then((response) => {
				this.setState({ recipes: response.data });
			})
			.catch((error) => {
				console.log('get recipes error:', error.response.data.Message);
			});
	}

	addRecipeHandler = (newRecipe) => {
		const userID = localStorage.getItem('userID');
		axios
			.post(`http://172.22.13.38:1323/recipes/${userID}`, {
				title: newRecipe.title,
				ingredients: newRecipe.ingredients,
				instructions: newRecipe.instructions
			})
			.then((response) => {
				const recipes = [ ...this.state.recipes, response.data ];
				this.setState({ recipes });
			});
	};

	deleteRecipeHandler = (id) => {
		axios.delete(`http://172.22.13.38:1323/recipes/${id}`).then(() => {
			const recipes = this.state.recipes.filter((recipe) => recipe.id !== id);
			this.setState({ recipes: recipes });
		});
	};

	render() {
		const { recipes } = this.state;
		return Array.isArray(recipes) && recipes.length > 0 ? (
			<div>
				<div className="container">
					<h3>Recipes</h3>
					<div className={styles.recipesContainer}>
						{recipes.map((recipe) => (
							<Recipe key={recipe.id} recipe={recipe} deleteClickHandler={this.deleteRecipeHandler} />
						))}
					</div>
					<AddRecipe addRecipeHandler={this.addRecipeHandler} />
				</div>
			</div>
		) : (
			<div>
				<div className={styles.cardNoRecipes}>
					<h3>Recipes</h3>
					<h4>There are no recipes</h4>
					<AddRecipe addRecipeHandler={this.addRecipeHandler} />
				</div>
			</div>
		);
	}
}

export default withNavBar(Recipes);
