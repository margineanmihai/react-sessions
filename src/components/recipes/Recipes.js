import React, { Component } from 'react';
import Recipe from './Recipe';
import styles from './Recipes.module.css';
import AddRecipe from './AddRecipe';
import axios from 'axios';

class Recipes extends Component {
	state = {
		recipes: [
			// {
			// 	id: 1,
			// 	title: 'Pina Colada',
			// 	ingredients: 'rom, suc ananas, lapte cocos,gheata',
			// 	instructions:
			// 		'Pentru a obține un cocktail mai consistent poți folosi cremă de cocos în loc de lapte, iar pentru o băutură mai tare poți folosi lichior de cocos. De obicei, paharul este decorat cu o felie de ananas.'
			// },
			// {
			// 	id: 2,
			// 	title: 'Margarita',
			// 	ingredients: 'tequila, triplu sec, lime juice, gheata',
			// 	instructions:
			// 		'În prealabil trebuie să ungi buza paharului de martini cu suc de limetă, apoi să glazurezi acea porțiune cu sare sau cu zahăr. Ingredientele se amestecă în shaker și se toarnă direct în pahar.'
			// },
			// {
			// 	id: 3,
			// 	title: 'Mai Tai',
			// 	ingredients: 'rom alb, rom negru, triplu sec, suc portocale, lime juice, suc ananas, gheata',
			// 	instructions:
			// 		'Toate ingredientele se amestecă într-un shaker, mai puțin romul negru sau maro, care se adaugă la final. Reține că Mai Tai este un cocktail destul de complex și nu vei găsi nicăieri două rețete identice. Poți înlocui sucul de portocale cu curaçao de portocale și poți adăuga sirop de migdale sau zahăr brun pentru a îndulci băutura. De obicei, Mai Tai se ornează cu o cireașă și se servește întotdeauna în pahar rocks.'
			// }
		]
    };
    
    componentDidMount() {
        axios.get("http://172.22.13.38:1323/recipes/5d6e10e384d3303da1547267")
        .then(response => {
            this.setState({recipes:response.data})
        });
    }
	deleteRecipe = (id) => {
		const recipes = this.state.recipes.filter((element) => element.id !== id);
		this.setState({ recipes });
	};

	addRecipe = (newRecipe) => {
		const recipes = this.state.recipes;
		newRecipe.id = Math.random();
		recipes.push(newRecipe);
		this.setState({ recipes });
	};

	render() {
		const { recipes } = this.state;
		return (
			<div>
				<h3>Recipes</h3>
				<div className={styles.recipesContainer}>
					{recipes.map((recipe) => (
						<Recipe
							key={recipe.id}
							title={recipe.title}
							ingredients={recipe.ingredients}
							instructions={recipe.instructions}
							deleteClickHandler={() => this.deleteRecipe(recipe.id)}
						/>
					))}
				</div>
				<AddRecipe addRecipeHandler={this.addRecipe} />
			</div>
		);
	}
}

export default Recipes;
