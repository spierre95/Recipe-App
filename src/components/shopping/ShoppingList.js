import React, { Component } from "react";
import { connect } from "react-redux";
import ShoppingListItem from "./ShoppingListItem";

class ShoppingList extends Component {
  render() {
    const { list } = this.props;
    const shoppingList = list.ingredients && list.ingredients;
    return (
      <div className="shopping-list">
        <div className="shopping-list__container">
        {shoppingList.map(item => (
          <ShoppingListItem item={item} />
        ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.shopping
});

export default connect(mapStateToProps)(ShoppingList);
