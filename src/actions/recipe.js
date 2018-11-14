import { search } from "constants/apiRequests";
import { testData } from 'constants/testData';

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
