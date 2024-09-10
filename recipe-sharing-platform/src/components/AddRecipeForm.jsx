import { useState } from "react";
import recipeData from '../data.json'

const AddRecipeForm = () => {
    const [recipes, setRecipes] = useState(recipeData)
    const [title, setTitle] = useState('')
    const [summary, setSummery] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [preparation, setPreparation] = useState('')
    const [error, setError] = useState('')

    const changeHndler = (e) => {
        e.preventDefault()
        const {name, value} = e.target;

    }

    const submitHndler = () => {

        if(!title | !summary | !ingredients | !preparation){
            setError('Please fill all the filds')
            return
        }
        const id = recipeData.length + 1;
        const newRecepie = JSON.stringify({id, title, summary, ingredients, preparation})

    }
    return ( 
        <div>
            <form className="flex flex-col items-center px-10 max-w-[600px] my-10">
                <label>Title</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="text" 
                name = 'title'
                onChange={(e) => changeHndler(e)}
                value={title}
                />
                <label htmlFor="">Ingredients</label>
                <input
                className="border-2 rounded-md border-gray-600"
                type="textarea" />
                <label htmlFor="">Preparation</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="textarea" />
                <button className="w-28 bg-slate-400 m-6" type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default AddRecipeForm;