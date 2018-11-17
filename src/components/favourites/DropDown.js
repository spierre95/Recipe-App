import React, { Component, Fragment } from "react";
import { RecipeCardFavourite } from "components/recipe/RecipeCardFavourite";

export default class RecipeList extends Component {
  render() {
    const { favourites, showDropDown, handleHover } = this.props;
    return (
      <Fragment>
        {showDropDown && (
          <div
            className="favourite-dropdown__container"
            onMouseLeave={handleHover}
          >
              {showDropDown &&
                favourites.results &&
                favourites.results.map(id => (
                  <RecipeCardFavourite recipe={favourites.recipes[id]} />
                ))}
          </div>
        )}
      </Fragment>
    );
  }
}
