import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecipeList } from 'components/recipe/RecipeList'


class Search extends Component {
  render() {
    const { search } = this.props;
    console.log( search, "SEARCH_PROPS")
    return (
      <div className="search-results">
         <RecipeList recipes={search.recipes} results={search.results}/>
      </div>
    );
  }
}

//FIXME: not sure why it wouldn't connect to the redux store in the child component this will do for now to display the data, but should refactor later

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
)(Search);