// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import { getRecipe, updateServingSize } from "../../actions/recipe";
// import { addItemsToList } from '../../actions/shopping';
// import  Modal from '../Modal';

// class Recipe extends Component {
  
//   render() {
    
//     return (
//       <div className="search-results">
//         <div className="search-results__container">
//           <div
//             class="recipe-card__img"
//             style={{ backgroundImage: `url(${imgUrl})` }}
//             alt={title}
//           >
//             <h2 className="heading-secondary"> {title} </h2>
//           </div>
//           <div>
//             <span onClick={() => this.handleClick("decrease", recipe_id, servingSize)}> - </span>
//             <span>{servingSize}</span>
//             <span onClick={() => this.handleClick("increase", recipe_id, servingSize)}> + </span>
//           </div>
//           <div className="recipe-ingredients__container">{ingredientList}</div>
//           <buttton onClick={() => addItemsToList(ingredients)}>add to list </buttton>
//           <Modal><h1> Hello world </h1></Modal>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   recipes: state.recipes.recipes
// });

// export default withRouter(
//   connect(
//     mapStateToProps,
//     { getRecipe, updateServingSize, addItemsToList }
//   )(Recipe)
// );