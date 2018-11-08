import { search } from "constants/apiRequests";

export function searchRecipes(input) {
  return dispatch => {
    dispatch(requestRecipes())
    return search(input)
      .then(res => {
        const recipes = res.data;

        dispatch({
          type: "RECEIVE_RECIPES",
          payload: recipes
        });
      })
      .catch(error => {
        throw error
      });
  };
}

function requestRecipes() {
  return {
    type: 'REQUEST_RECIPES',
  };
}
