import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeRecipeFromList } from "../../actions/shopping";
import ShoppingListItem from "./ShoppingListItem";

class ShoppingList extends Component {

  handleRemoveRecipe = (recipe_id) => {
     const {removeRecipeFromList} = this.props
     removeRecipeFromList(recipe_id)
  }
  render() {
    const { shoppingList } = this.props;
    const  shoppingListItems = shoppingList.list

    return (Object.keys(shoppingListItems).map(key => {
      const shoppingListObj = shoppingListItems[key]
      if(shoppingListObj.ingredients.length === 0) this.handleRemoveRecipe(key);
      return (
      <div className="shopping-list">
          <div className="shopping-list__container">
          <h3 className="heading-tertiary">{shoppingListObj.title}</h3><span onClick={()=>this.handleRemoveRecipe(key)}>X</span>
          {
          shoppingListObj.ingredients.map(item => (
          <ShoppingListItem item={item} recipe_id={key}/>))  
          }     
          </div>
        </div>
      )
    }))
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shopping
});

export default withRouter(connect(mapStateToProps, {removeRecipeFromList})(ShoppingList));
