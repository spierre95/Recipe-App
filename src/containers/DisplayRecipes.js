import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "../components/List";

class DisplayRecipes extends Component {
  render() {
    const { match, search, favourites } = this.props;
    let type;
    switch (match.path) {
      case "/search":
        type = search;
        break;
      case "/favourites":
        type = favourites;
        break;
      default:
        break;
    }
    if (!type) return null;

    return (
      <div className="search-results">
        <List recipes={type.recipes} results={type.results} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  favourites: state.favourites
});

export default connect(mapStateToProps)(DisplayRecipes);
