import React from "react";
import "../styles/Card.css";

const Card = ({ title, image, description, rating, releaseDate }) => {
  return (
    <div className="card">
      <img
        className="image"
        src={image}
      />
      <div className="card_info">
        <p className="card_title">{title}</p>
        <p className="card_rating">
          <div>{releaseDate}</div>        
          <div> {rating}</div>
        </p>
        <p className="card_description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
