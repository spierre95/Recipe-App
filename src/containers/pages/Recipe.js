import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRecipe, updateServingSize } from "../../actions/recipe";

class Recipe extends Component {
  componentDidMount() {
    const { match, getRecipe } = this.props;
    const { recipe_id } = match.params;
    getRecipe(recipe_id);
  }

  handleClick = ( type, id, servingSize ) => {
    const { updateServingSize } = this.props;
    if (type === "decrease" && servingSize === 1 ) return null;
    updateServingSize( type, id )
  };

  render() {
    const { recipes, match } = this.props;
    const { recipe_id } = match.params;
    const recipe = recipes && recipes[recipe_id];
    const title = recipe && recipe.title;
    const ingredients =
      recipe &&
      recipe.ingredients.map(el => (
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
          <div className="recipe-ingredients__container">{ingredients}</div>
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
    { getRecipe, updateServingSize }
  )(Recipe)
);