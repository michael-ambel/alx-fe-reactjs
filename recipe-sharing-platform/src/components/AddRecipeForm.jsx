import { useState } from "react";

const AddRecipeForm = ({jsonData, setData}) => {
    const [recipes, setRecipes] = useState(jsonData)
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [steps, setSteps] = useState('')
    const [errors, setErrors] = useState('')

    const validate = errors;

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !summary || !ingredients || !steps){
            setErrors('Please fill all the filds')
            return
        }

        setErrors('')


        const newRecipe = {id:recipes.length + 1, title, summary, image: "https://via.placeholder.com/150", ingredients, instructions: steps}
        setRecipes((prvRec) => ([...prvRec, newRecipe]))
        setData(recipes)
        console.log(recipes);
    }
    return ( 
        <div>
            <form className="flex flex-col shadow-sm font-medium items-center pt-10 max-w-[600px] my-4" onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="text" 
                name = 'title'
                onChange={e => setTitle(e.target.value)}
                value={title}
                />
                <label>Summery</label>
                <textarea 
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={e => setSummary(e.target.value)}
                value={summary}
                />
                <label htmlFor="">Ingredients</label>
                <textarea
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={e => setIngredients(e.target.value)}
                value={ingredients} 
                />
                <label htmlFor="">Instructions</label>
                <textarea 
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={e => setSteps(e.target.value)}
                value={steps} 
                />
                <button className="w-28 bg-slate-400 mt-6" type="submit">Submit</button>
            </form>
            {validate && <div className="mt-0 mb-10 text-red-700">{errors}</div>}
        </div>
     );
}
 
export default AddRecipeForm;