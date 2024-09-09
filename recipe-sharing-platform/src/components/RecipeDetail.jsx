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
            <div className="flex flex-col md:flex-row items-center justify-center w-auto h-auto gap-8 bg-slate-300 p-4 rounded-2xl shadow-sm shadow-slate-500 hover:scale-105 transition-transform transform">
                <img className="w-60 sm:w-80 h-60 sm:h-80 object-cover" src={data.image} alt={data.title} />
                <div className='flex flex-col gap-4 items-start justify-start'>
                    <h2 className="text-3xl font-bold ">{data.title}</h2>
                    <p>{data.summary}</p>
                    <p>{data.ingredients}</p>
                    <p>{data.instructions}</p>
                </div>
            </div>
        </div>
     );
}
 
export default RecipeDetail;