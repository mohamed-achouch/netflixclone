import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((responce) => {
      setMovies(responce.data.results);
    });
  }, []);
    

  const truncateString = (str , num) => {
         if(str?.length > num)
         {
            return  str.slice(0,num) + '...'
         }else{
            return  str
         }
  }

  return (
    <div className=" w-full h-[600px] text-white">
      <div className=" h-full w-full">
        <div className=" absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className=" w-full h-full object-fit"
          src={` https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className=" absolute w-full top-[20%] p-4 md:p-8">
          <h1 className=" text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className=" my-4">
            <button className="rounded text-black border bg-gray-300 border-gray-300 py-2 px-5">
              Play
            </button>
            <button className=" rounded border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className=" text-gray-400 text-sm mt-4">Released: {movie?.release_date}</p>
           <p className=" w-full md:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-4">{truncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
