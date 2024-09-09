import { useState, useEffect } from "react";
import jsonData from '../data.json';

const HomePage = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data.map((rec, index) => (
        <div className="flex flex-col items-center justify-center w-[400px] h-[400px] bg-slate-300 p-4 rounded-2xl shadow-sm shadow-slate-500 hover:scale-105 transition-transform transform" key={index}>
                <img className="w-40 h-40 object-cover" src={rec.image} alt={rec.title} />
                <h2 className="text-3xl font-bold ">{rec.title}</h2>
                <p>{rec.summary}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
