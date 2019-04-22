import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRecipe, updateServingSize } from "../../actions/recipe";
import { addItemsToList } from '../../actions/shopping';
import  Modal from '../../components/Modal';

class Recipe extends Component {
  componentDidMount() {
    const { match, getRecipe } = this.props;
    const { recipe_id } = match.params;
    const { recipes } = this.props
    console.log( recipes, 'in recipe page' ) 
    getRecipe(recipe_id);
  }

  handleClick = ( type, id, servingSize ) => {
    const { updateServingSize } = this.props;
    if (type === "decrease" && servingSize === 1 ) return null;
    updateServingSize( type, id )
  };

  render() {
    const { recipes, match, addItemsToList } = this.props;
    const { recipe_id } = match.params;
    const recipe = recipes && recipes[recipe_id];
    const title = recipe && recipe.title;
    const ingredients = recipe && recipe.ingredients
    const ingredientList =
      ingredients && ingredients.map(el => (
        <div className="recipe-ingredients">{`${el.count} ${el.unit} ${
          el.ingredient
        }`}</div>
      ));
    const imgUrl = recipe && recipe.image_url;
    const servingSize = recipe && recipe.servingSize;
    return (
      <div className="search-results">
        <div className="search-results__container">
          <div
            class="recipe-card__img"
            style={{ backgroundImage: `url(${imgUrl})` }}
            alt={title}
          >
            <h2 className="heading-secondary"> {title} </h2>
          </div>
          <div>
            <span onClick={() => this.handleClick("decrease", recipe_id, servingSize)}> - </span>
            <span>{servingSize}</span>
            <span onClick={() => this.handleClick("increase", recipe_id, servingSize)}> + </span>
          </div>
          <div className="recipe-ingredients__container">{ingredientList}</div>
          <buttton onClick={() => addItemsToList(ingredients)}>add to list </buttton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default withRouter(
  connect(
    mapStateToProps,
    { getRecipe, updateServingSize, addItemsToList }
  )(Recipe)
);