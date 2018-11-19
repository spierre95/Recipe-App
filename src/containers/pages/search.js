import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecipeList } from 'components/recipe/RecipeList'


class Search extends Component {
  render() {
    const { search } = this.props;
    
    return (
      <div className="search-results">
         <RecipeList recipes={search.recipes} results={search.results}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  favourite: state.favourite
});

export default connect(
  mapStateToProps,
)(Search);