import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeList extends Component {
  render() {
      return(
        <div>
            
        </div>
      )
  }
}

const mapStateToProps = state => ({
    fetching: state.recipes.fetching
  });
  
  export default connect(
    mapStateToProps
  )(RecipeList);
