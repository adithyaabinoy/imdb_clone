import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
        ></img>
      </a>
      <a className="links">Popular</a>
      <a className="links">Top Rated</a>
      <a className="links">Upcoming</a>
    </div>
  );
};

export default Navbar;
