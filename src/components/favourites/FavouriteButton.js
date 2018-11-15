import React, { Component } from "react";
import { connect } from "react-redux";
import { addToFavourites, removeFromFavourites } from "actions/favourites";

export class FavouriteButton extends Component {

  handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const { removeFromFavourites, addToFavourites, recipe } = this.props;

    recipe.isFavourite
      ? removeFromFavourites(recipe)
      : addToFavourites(recipe);
  };

  render() {
    const isFavourite = this.props.recipe.isFavourite ? "fas" : "far";

    return (
      <i
        className={`${isFavourite} fa-heart favourite`}
        onClick={this.handleClick}
      />
    );
  }
}

export default connect(
  null,
  { addToFavourites, removeFromFavourites }
)(FavouriteButton);
