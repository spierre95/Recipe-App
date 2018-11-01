import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRecipes } from "actions/recipe";
export class SearchBar extends Component {
  state = { input: null };

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick(event) {
    const { searchRecipes } = this.props;

    searchRecipes(this.state.input);

    event.preventDefault()
  }

  render() {
    return (
      <div class="search__container--main">
        <div class="search">
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            className="search__input"
            placeholder="Search Millions of Recipes"
            name="input"
          />
          <button
            type="submit"
            class="search__button"
            onClick={this.handleClick.bind(this)}
          >
            <i class="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { searchRecipes }
)(SearchBar);
