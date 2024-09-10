import { useState } from "react";

const AddRecipeForm = ({jsonData}) => {
    const [recipes, setRecipes] = useState(jsonData)
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [steps, setSteps] = useState('')
    const [errors, setErrors] = useState('')

 

    const changeHndler = (e) => {
        
        const {name, value} = e.target;
        setFormData(prevState => ({...formData, [name]:value}))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title | !summary | !ingredients | !steps){
            setErrors('Please fill all the filds')
            const validate = errors;
            return
        }
        const newId = JSON.parse(recipes).length + 1;
        setId(newId)
        console.log(newId);
        setFormData(prevState => ({...prevState, [id]:id}))
        const newJsonData = JSON.stringify({id, title, summary, ingredients, preparation: steps})
        setRecipes((prvRec) => ({...prvRec, newJsonData}))
    }
    return ( 
        <div>
            <form className="flex flex-col items-center pt-10 max-w-[600px] my-4" onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="text" 
                name = 'title'
                onChange={e => setTitle(e.target.value)}
                value={title}
                />
                <label>Summery</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={e => setSummary(e.target.value)}
                value={summary}
                />
                <label htmlFor="">Ingredients</label>
                <input
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={e => setIngredients(e.target.value)}
                value={ingredients} 
                />
                <label htmlFor="">Preparation</label>
                <input 
                className="border-2 rounded-md border-gray-600"
                type="textarea" 
                name = 'title'
                onChange={e => setSteps(e.target.value)}
                value={steps} 
                />
                <button className="w-28 bg-slate-400 mt-6" type="submit">Submit</button>
            </form>
            {validate? <div></div> : <div className="mt-0 mb-10 text-red-700">{errors}</div>}
        </div>
     );
}
 
export default AddRecipeForm;