import React, { Component } from "react";
import { connect } from "react-redux";
import { RecipeCard } from "components/recipe/RecipeCard";

export class RecipeList extends Component {
  render() {
    const { recipes, results } = this.props;
    return (
      <div className="search-results__container">
        {results && results.map(id => <RecipeCard recipe={recipes[id]} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.search.recipes
});

export default connect(mapStateToProps)(RecipeList);
