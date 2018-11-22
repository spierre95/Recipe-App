import { normalize } from 'normalizr';
import { recipeSchema } from 'schema/recipe';

const initialState = {
  fetching: false,
  recipes: {},
  results: []
};

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_RECIPES":
      return {
        fetching: true
      };

    case "RECEIVE_RECIPE":

    console.log(action.payload)
    const normalizedData = normalize(action.payload, [recipeSchema])
    console.log(normalizedData.entities.recipe)

      return {
        fetching: false,
        ...state,
        recipes:{
            ...state.recipes,
            ...normalizedData.entities.recipes
        },
        results: [...state.results, normalizedData.entities.recipes.recipe_id]
      };

    case "ADD_TO_FAVOURITES":
    return {
      ...state,
      recipes : {
        ...state.recipes,
        [action.payload.recipe.recipe_id]:{
          ...state.recipes[action.payload.recipe.recipe_id],
          isFavourite: true
        } 
      }
    }  
    case "REMOVE_FROM_FAVOURITES":
    return {
      ...state,
      recipes : {
        ...state.recipes,
        [action.payload.recipe.recipe_id]:{
          ...state.recipes[action.payload.recipe.recipe_id],
          isFavourite: false
        } 
      }
    } 
    default:
      return state;
  }
}