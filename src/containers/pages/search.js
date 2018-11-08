import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecipeList } from 'components/recipe/RecipeList'


class Search extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="search-results">
         <RecipeList recipes={this.props.recipes}/>
      </div>
    );
  }
}

//FIXME: not sure why it wouldn't connect to the redux store in the child component this will do for now to display the data, but should refactor later

const mapStateToProps = state => ({
  recipes: state.search.recipes
});

export default connect(
  mapStateToProps,
)(Search);