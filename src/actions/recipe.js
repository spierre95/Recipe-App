import { search, get } from "../constants/apiRequests";
import { searchData, recipeData } from "../constants/testData";
import parseIngredients from "../utils/parseIngredients";

export function searchRecipes(input) {
  return dispatch => {
    const recipes = searchData;

    dispatch({
      type: "RECEIVE_RECIPES",
      payload: recipes
    });
    dispatch(requestRecipes());
    return search(input)
      .then(res => {
        const recipes = res.data;

        dispatch({
          type: "RECEIVE_RECIPES",
          payload: recipes
        });
      })
      .catch(error => {
        throw error;
      });
  };
}

function requestRecipes() {
  return {
    type: "REQUEST_RECIPES"
  };
}

export function getRecipe(id) {
  return dispatch => {
    const recipe = recipeData;

    const { ingredients } = recipe.recipe;

    recipe.recipe.ingredients = parseIngredients(ingredients);

    dispatch({
      type: "RECEIVE_RECIPE",
      payload: recipe
    });

    return get(id)
    .then((res)=>{
        const { recipe } = res.data

        const { ingredients } = recipe

        recipe['ingredients'] = parseIngredients(ingredients)


        dispatch({
          type: "RECEIVE_RECIPE",
          payload: recipe
        });
    })
    .catch(err =>{
      throw err;
    })
  };
}

export function updateServingSize(type, id) {
  return {
    type: 'UPDATE_SERVING_SIZE',
    payload: {id, type }
  }
}