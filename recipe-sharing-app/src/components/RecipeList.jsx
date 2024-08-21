import useRecipeStore from './recipeStore'
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes)

    return (
        <div>
            {recipes.map(recipe => (
                <Link to = {`/${recipe.id}`}>
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default RecipeList;