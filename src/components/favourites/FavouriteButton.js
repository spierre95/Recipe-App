import React, { Component } from "react";

export class FavouriteButton extends Component {

handleClick = () => {
    
}

  render() {
    return (
      <div onClick={this.handleClick}>
        <i class="fas fa-heart" />
      </div>
    );
  }
}

export default FavouriteButton;
