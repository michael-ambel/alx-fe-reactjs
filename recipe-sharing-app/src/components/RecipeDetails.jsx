import  useRecipeStore  from './recipeStore';
import { useParams } from 'react-router-dom';


  const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === Number(recipeId))
    )
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    );
  };

  export default RecipeDetails;