import React, { Component } from "react";
import { RecipeCardFavourite } from "components/recipe/RecipeCardFavourite";

export default class RecipeList extends Component {
  render() {
    const { favourites, showDropDown, handleHover } = this.props;
    return (
      <div className="favourite-dropdown__container" onMouseLeave={handleHover}>
        <div className="favourite-dropdown__wrapper">
            {showDropDown &&
            favourites.results &&
            favourites.results.map(id => (
                <RecipeCardFavourite recipe={favourites.recipes[id]} />
            ))}
        </div>
      </div>
    );
  }
}
