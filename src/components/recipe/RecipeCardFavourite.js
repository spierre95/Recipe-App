import React from "react";
import { Link } from "react-router-dom";

export const RecipeCardFavourite = ({ recipe }) => {
  return (
    <div className="recipe-card">
     <Link to={`/recipe/${recipe.recipe_id}`}>
      <div
        class="recipe-card__img"
        style={{ backgroundImage: `url(${recipe.image_url})` }}
        alt={recipe.title}
      >
      </div>
        <h3 className="heading-tertiary">{recipe.title}</h3>
      </Link>
    </div>
  );
};

export default RecipeCardFavourite;