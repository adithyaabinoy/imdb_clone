import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Home.css";
import Card from "../Components/Card";

const Home = () => {
  const [list, setList] = useState("");

  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=5ca013d5c18378b5898b51645d915880&language=en-US";
  const movieData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setList(data.results));
  };
  useEffect(() => {
    movieData();
  }, []);
  console.log(list);

  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {list && list.length > 0
          ? list.map((movie) => {
              console.log(movie);
              return (
                <Link key={movie.id} to={`/movie/$(movie.id)`}>
                  <div className="poster_image">
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie && movie.backdrop_path
                      }`}
                      alt="carousel"
                    />
                  </div>
                  <div className="poster_info">
                    <p className="title">{movie ? movie.title : ""}</p>
                    <p className="release_date">
                      <span>{movie ? movie.release_date : ""}</span>

                      {movie ? movie.vote_average : ""}
                    </p>
                    <p className="description">{movie ? movie.overview : ""}</p>
                  </div>
                </Link>
              );
            })
          : ""}
      </Carousel>
      {/* <Card 
      // title="hello"
      // releaseDate="2015"
      // description="hiiii"
      // rating={8}
      
      /> */}
      <div className="home_popular">
        {list && list.length > 0
          ? list.map((e) => {
              return (
                <Card
                  title={e.title}
                  releaseDate={e.release_date}
                  rating={e.vote_average}
                  description={e.overview}
                  image={`https://image.tmdb.org/t/p/original${
                    e && e.backdrop_path
                  }`}
                />
              );
            })
          : "Loading"}
      </div>
    </div>
  );
};

export default Home;
