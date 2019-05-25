import React, { Component } from "react";
// import { connect } from "react-redux";

class ShoppingListItem extends Component {
    
  render() {
    const { item } = this.props

    return (
      <div className="shopping-list__item">
        <i className="fas fa-check"></i>
        <div className="shopping-list__item-text">
          {item.count} {item.unit} {item.ingredient}
          <span onClick={() => this.handleClick()}> - </span>
          <span onClick={() => this.handleClick()}> + </span>
        </div>
      </div>
    )
  }
}

export default ShoppingListItem;