import { useParams } from 'react-router-dom';
import jsonData from '../data.json'
import { useEffect, useState } from 'react';

const RecipeDetail = () => {
    const id = useParams()
    const[data, setData] = useState([])

    useEffect(() => {
        jsonData.filter((data) => data.id === id)
        const [data] = jsonData;
        setData(data)
        console.log(data);
    }, [])
    return ( 
        <div>
            <div className="flex flex-col items-center justify-center w-[400px] h-[400px] bg-slate-300 p-4 rounded-2xl shadow-sm shadow-slate-500 hover:scale-105 transition-transform transform">
                <img className="w-40 h-40 object-cover" src={data.image} alt={data.title} />
                <h2 className="text-3xl font-bold ">{data.title}</h2>
                <p>{data.summary}</p>
                <p>{data.ingredients}</p>
                <p>{data.instructions}</p>
            </div>
        </div>
     );
}
 
export default RecipeDetail;