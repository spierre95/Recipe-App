import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRecipe } from "../../actions/recipe";

class Recipe extends Component {
  componentDidMount() {
    const { match, getRecipe } = this.props;
    const { recipe_id } = match.params;
    getRecipe(recipe_id);
  }

  render() {
    const { recipes, match } = this.props;
    const recipe = recipes && recipes[match.params.recipe_id] 
    const title = recipe && recipe.title 
    return <h1> {title} </h1>;
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
})

export default withRouter(
  connect(
    mapStateToProps,
    { getRecipe }
  )(Recipe)
);
