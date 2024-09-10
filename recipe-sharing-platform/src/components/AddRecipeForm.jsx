import { useState } from "react";
import recipeData from '../data.json'

const AddRecipeForm = () => {
    const [recipes, setRecipes] = useState(recipeData)
    const [formData, setFormData] = useState({id:'', title:'', summary:'', ingredients:'', preparation:''})
    const [error, setError] = useState('')
    const {id, title, summary, ingredients, preparation} = formData


    const changeHndler = (e) => {
        
        const {name, value} = e.target;
        setFormData(prevState => ({...formData, [name]:value}))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title | !summary | !ingredients | !preparation){
            setError('Please fill all the filds')
            return
        }
        const newId = recipes.length + 1;
        console.log(newId);
        setFormData(prevState => ({...prevState, id:newId}))
        setRecipes((prvRec) => ({...prvRec, formData}))
    }
    return ( 
        <div>
            <form className="flex flex-col items-center px-10 max-w-[600px] my-10" onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="text" 
                name = 'title'
                onChange={(e) => changeHndler(e)}
                value={title}
                />
                <label>Summery</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={(e) => changeHndler(e)}
                value={summary}
                />
                <label htmlFor="">Ingredients</label>
                <input
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={(e) => changeHndler(e)}
                value={ingredients} 
                />
                <label htmlFor="">Preparation</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={(e) => changeHndler(e)}
                value={preparation} 
                />
                <button className="w-28 bg-slate-400 mt-6" type="submit">Submit</button>
            </form>
            <div>{error}</div>
        </div>
     );
}
 
export default AddRecipeForm;