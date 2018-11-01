import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { searchRecipes } from "actions/recipe";
export class SearchBar extends Component {

  static propTypes = {
    redirect: PropTypes.bool,
  };

  static contextTypes = {
    router: PropTypes.object
  }

  inputValue = React.createRef();
  
  state = { input: null, placeholder: "Search Millions of Recipes" };

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick(event) {
    const { searchRecipes } = this.props;

    searchRecipes(this.state.input);

    this.resetInput();
    this.handleRedirect()

    event.preventDefault();
  }

  handleKeyPress = event => {
    const { searchRecipes } = this.props;
    if (event.key === "Enter") {
      searchRecipes(this.state.input);
      this.resetInput();
      this.handleRedirect()
    }
  };

  resetInput() {
    this.inputValue.current.value = "";
    this.inputValue.current.placeholder = this.state.placeholder;
  }

  handleRedirect(){
    if (this.props.redirect){
       this.context.router.history.push('/search') 
    }
  }

  render() {
    return (
      <div class="search__container--main">
        <div class="search">
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
