import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Card";
//import { useSelector, useDispatch } from "react-redux";
//import { fetchMovies } from "../../Redux/movieSlice";

const MovieList = () => {
  const { type } = useParams();
  //const movies = useSelector((state) => state.movies);
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  const [movies, setMovieList] = useState([]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=ebab107d0e771faee711646843039664&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movies.map((movie, index) => (
          <Cards movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
