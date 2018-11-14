import React, { Component } from "react";
import { connect } from "react-redux";
import { addToFavourites, removeFromFavourites } from "actions/favourites";

export class FavouriteButton extends Component {

  state = {
      isFavourite: this.props.recipe.isFavourite
  }

  handleClick = () => {
    const { removeFromFavourites, addToFavourites, recipe } = this.props;

    recipe.isFavourite ? removeFromFavourites(recipe.recipe_id) : addToFavourites(recipe.recipe_id);
  };

handleHover = () => {
    this.setState({ isFavourite: !this.state.isFavourite})
}

  render() {

    const isFavourite = this.state.isFavourite ? "fas" : "far"

    return <i className={`${isFavourite} fa-heart favourite`} onClick={this.handleClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>;
  }
}

export default connect(
  null,
  { addToFavourites, removeFromFavourites }
)(FavouriteButton);
