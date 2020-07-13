import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseIngredientCount, decreaseIngridientCount, removeItemFromList } from "./../../actions/shopping";

class ShoppingListItem extends Component {

  handleRemoveItem = () => {
    const {removeItemFromList, item, recipe_id} = this.props;
    removeItemFromList({item_id:item.id, recipe_id})
  }

  handleDecrease = () => {
   const {decreaseIngridientCount, item, recipe_id} = this.props;
   if(item.count || item.count !== 0 ) {
     decreaseIngridientCount({item_id:item.id, recipe_id})
   }
  }

  handleIncrease = () => {
    const {increaseIngredientCount, item, recipe_id} = this.props;
    if(item.count || item.count === 0) {
      increaseIngredientCount({item_id:item.id, recipe_id})
    }
  }
    
  render() {
    const { item } = this.props
    if(item.count === 0 ) this.handleRemoveItem();

    return (
      <div className="shopping-list__item">
        <div className="shopping-list__item-container">
          <div class="shopping-list__item-text">
            {item.count} {item.unit} {item.ingredient}
          </div>
          {
          item.count &&
          <div class="shopping-list__item-update">
            <span onClick={this.handleIncrease}><i class="fas fa-plus"></i></span>
            <span onClick={this.handleDecrease}><i class="fas fa-minus"></i></span>
          </div>
          }
        </div>
        <div className="shopping-list__item-remove" onClick={this.handleRemoveItem}><i class="fas fa-times"></i></div>
      </div>
    )
  }
}

export default connect(
  null,
  { decreaseIngridientCount, increaseIngredientCount, removeItemFromList }
)(ShoppingListItem );