import React, { Fragment } from 'react';
import styles from './Recipe.module.css';
const recipe = (props) => {
	const ingredients = props.ingredients;
	return (
		<Fragment>
			<div className={styles.recipeCard}>
				<p>Title: {props.title}</p>
                Ingredients:
                <div className={styles.ingredients}>
                <ul>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                </ul>
                </div>
				<p>Instructions: {props.instructions}</p>
				<button className="customButton" onClick={props.deleteClickHandler}>
					Delete
				</button>
			</div>
		</Fragment>
	);
};

export default recipe;
