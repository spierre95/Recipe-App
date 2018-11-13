import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFavourites } from "actions/favourites";

export class FavouriteButton extends Component {
  handleClick = () => {
    const { updateFavourites, recipe } = this.props;
    updateFavourites(recipe)
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <i class="fas fa-heart" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect(
  mapStateToProps,
  { updateFavourites }
)(FavouriteButton);
