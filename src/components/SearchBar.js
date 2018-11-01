import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchRecipes } from "actions/recipe";
export class SearchBar extends Component {
  static propTypes = {
    redirect: PropTypes.bool,
    className: PropTypes.string
  };

  static contextTypes = {
    router: PropTypes.object
  };

  inputValue = React.createRef();

  state = { input: null, placeholder: "Search Millions of Recipes" };

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick(event) {
    const { searchRecipes } = this.props;

    searchRecipes(this.state.input);

    this.resetInput();
    this.handleRedirect();

    event.preventDefault();
  }

  handleKeyPress = event => {
    const { searchRecipes } = this.props;
    if (event.key === "Enter") {
      searchRecipes(this.state.input);
      this.resetInput();
      this.handleRedirect();
    }
  };

  resetInput() {
    this.inputValue.current.value = "";
    this.inputValue.current.placeholder = this.state.placeholder;
  }

  handleRedirect() {
    const { redirect, fetching } = this.props;

    if (redirect && !fetching) {
      this.context.router.history.push("/search");
    }
  }

  render() {
    return (
      <div className={`${this.props.className}`}>
        <div className="search">
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            className="search__input"
            placeholder={this.state.placeholder}
            ref={this.inputValue}
            name="input"
          />
          <button
            type="submit"
            className="search__button"
            onClick={this.handleClick.bind(this)}
          >
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.recipes.fetching
});

export default connect(
  mapStateToProps,
  { searchRecipes }
)(SearchBar);
