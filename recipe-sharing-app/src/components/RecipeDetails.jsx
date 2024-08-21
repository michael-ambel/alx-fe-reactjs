import EditRecipeForm from './EditRecipeForm';
import  useRecipeStore  from './recipeStore';
import { useParams } from 'react-router-dom';


  const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id == Number(recipeId)))
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm id={recipe.id}/>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    );
  };

  export default RecipeDetails;