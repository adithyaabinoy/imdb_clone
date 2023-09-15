import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Components/Card";

const Movieinfo = () => {
  let { id } = useParams();

  const [movies, setMovies] = useState();

  const URL = `https://api.themoviedb.org/3/movie/2?api_key=5ca013d5c18378b5898b51645d915880&language=en-US`;

  const getMovie = () => {
    fetch(URL)
      .then((data) => data.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);

  return (
    <div className="movie_info">
      <div className="movie_image">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movies && movies.backdrop_path
          }`}
        />
        <div>
          <Card
            image={`https://image.tmdb.org/t/p/original${
              movies && movies.backdrop_path
            }`}
          />
          <div>
            <div>
                <h1>{movies && movies.title}</h1>
            </div>
            <div>Synopsis</div>
          </div>
        </div>
      </div>
      <div>
        <h4>Useful Links</h4>
        <Link to="/">Homepage</Link>
        <Link to="www.imdb.com">IMDB</Link>
      </div>
    </div>
  );
};

export default Movieinfo;
