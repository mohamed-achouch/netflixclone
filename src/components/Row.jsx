import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const Row = ({ title, fetchURL,RowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((responce) => {
      setMovies(responce.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider"+ RowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider"+ RowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>

      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className=" bg-white rounded-full absolute opacity-50  hover:opacity-100 cursor-pointer z-10 left-2 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + RowId }
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, index) => (
            <Movie item={item} key={index} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" bg-white rounded-full absolute opacity-50  hover:opacity-100 cursor-pointer z-10 right-2 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
