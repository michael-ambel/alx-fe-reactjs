import useRecipeStore from './recipeStore';


const DeleteRecipeButton = (props) => {

    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)


    const handleDelete = (event) => {
        event.preventDefault();
        const id = Number(props.id);
        console.log(id);
        deleteRecipe(id);
      };

    return ( 
        <div>
             <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default DeleteRecipeButton;