import React, { Component, Fragment } from 'react';
import styles from './Recipe.module.css';
import { withRouter } from 'react-router-dom';
class Recipe extends Component {
	detailsHandler = () => {
		this.props.history.push(`recipes/${this.props.recipe.id}`);
	};

	render() {
		const { recipe, deleteClickHandler } = this.props;
		return (
			<Fragment>
				<div className={styles.recipeCard}>
					<div>{recipe.title}</div>
					<button onClick={() => deleteClickHandler(recipe.id)}>Delete</button>
					<button onClick={this.detailsHandler}>Details</button>
				</div>
			</Fragment>
		);
	}
}

export default withRouter(Recipe);
