import useRecipeStore from './recipeStore';
import { useState } from 'react';

const EditRecipeForm = (props) => {

    const updateRecipe = useRecipeStore(state => state.updateRecipe)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleEdit = (event) => {
        event.preventDefault();
        const id = props.id;
        console.log(id);
        console.log({ id, title, description });
        updateRecipe(Number(id), { id, title, description });
        setTitle('');
        setDescription('');
      };

    return ( 
        <div>
             <form onSubmit={handleEdit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Edit Recipe</button>
            </form>
        </div>
     );
}
 
export default EditRecipeForm;