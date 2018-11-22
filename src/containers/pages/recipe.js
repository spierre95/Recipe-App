import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRecipe } from "actions/recipe";

class Recipe extends Component {
  componentDidMount() {
    const { match, getRecipe } = this.props;
    const { recipe_id } = match.params;
    getRecipe(recipe_id);
  }

  render() {
    return <h1> Recipe </h1>;
  }
}

export default withRouter(
  connect(
    null,
    { getRecipe }
  )(Recipe)
);
