import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = props => {
  return (
    <div className="recipe-card">
     <Link to="/recipe/1">
      <div
        class="recipe-card__img"
        style={{ backgroundImage: `url(${props.img})` }}
        alt={props.title}
      />
        <h3 className="heading-tertiary">{props.title}</h3>
      </Link>
    </div>
  );
};

export default RecipeCard;
