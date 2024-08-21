import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom'


const DeleteRecipeButton = (props) => {
  const navigate = useNavigate();
  const id = Number(props.id);

    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)


    const handleDelete = (event) => {
        event.preventDefault();
        
        console.log(id);
        deleteRecipe(id);
        navigate('/');
      };

    return ( 
        <div>
             <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default DeleteRecipeButton;