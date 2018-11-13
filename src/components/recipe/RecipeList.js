import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecipeCard } from 'components/recipe/RecipeCard';

export class RecipeList extends Component {

  render() {
    const { recipes } = this.props
      return(
           <div className="search-results__container">
            {recipes && recipes.map(recipe =>
                <RecipeCard img={recipe.image_url} id={recipe.recipe_id} title={recipe.title}/>
            )}
          </div>
      )
  }
}

const mapStateToProps = state => ({
  recipes: state.search.recipes
});

export default connect(
  mapStateToProps,
)(RecipeList);
