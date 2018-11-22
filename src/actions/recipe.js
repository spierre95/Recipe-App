import { search, get } from "constants/apiRequests";
import { testData } from 'constants/testData';
import parseIngredients from 'utils/parseIngredients'

export function searchRecipes(input) {
  return dispatch => {

    const recipes = testData
    
    dispatch({
        type: "RECEIVE_RECIPES",
        payload: recipes
    });
    // dispatch(requestRecipes());
    // return search(input)
    //   .then(res => {
    //     const recipes = res.data;

    //     dispatch({
    //       type: "RECEIVE_RECIPES",
    //       payload: recipes
    //     });
    //   })
    //   .catch(error => {
    //     throw error;
    //   });
  };
}

// function requestRecipes() {
//   return {
//     type: "REQUEST_RECIPES"
//   };
// }

export function getRecipe(id) {
  return dispatch => {

    return get(id)
    .then((res)=>{
        const { recipe } = res.data
        
        const { ingredients } = recipe
        
        recipe['ingredients'] = parseIngredients(ingredients)

        console.log(recipe)

        dispatch({
          type: "RECEIVE_RECIPE",
          payload: recipe
        });
    })
    .catch(err =>{
      throw err;
    })
    // dispatch(requestRecipes());
    // return search(input)
    //   .then(res => {
    //     const recipes = res.data;

    //     dispatch({
    //       type: "RECEIVE_RECIPES",
    //       payload: recipes
    //     });
    //   })
    //   .catch(error => {
    //     throw error;
    //   });
  };
}
