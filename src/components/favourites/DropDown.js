import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { RecipeCardFavourite } from "components/recipe/RecipeCardFavourite";
import SeeAllButton from "components/favourites/SeeAllButton";

export default class RecipeList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { favourites, showDropDown, handleHover } = this.props;
    return (
      <Fragment>
        {showDropDown && (
          <div className="favourite-dropdown">
            <h3 className="favourite-dropdown__title">Favourites</h3>
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
            <SeeAllButton favourites={favourites.results.length > 0 && true} />
          </div>
        )}
      </Fragment>
    );
  }
}
