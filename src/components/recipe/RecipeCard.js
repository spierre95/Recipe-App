import React from "react";
import { Link } from "react-router-dom";
import FavouriteButton from "components/favourites/FavouriteButton"

export const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
    <FavouriteButton recipe={recipe} />
     <Link to={`/recipe/${recipe.recipe_id}`}>
      <div
        class="recipe-card__img"
        style={{ backgroundImage: `url(${recipe.imgage_url})` }}
        alt={recipe.title}
      />
        <h3 className="heading-tertiary">{recipe.title}</h3>
      </Link>
    </div>
  );
};

export default RecipeCard;
