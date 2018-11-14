import { normalize } from 'normalizr';
import { recipesSchema } from 'schema/recipe';

const initialState = {
  fetching: false,
};

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_RECIPES":
      return {
        fetching: true
      };

    case "RECEIVE_RECIPES":

    console.log(action.payload.recipes)

    const normalizedData = normalize(action.payload.recipes, [recipesSchema])

    console.log(normalizedData)

      return {
        fetching: false,
        recipes: normalizedData.entities.recipes,
        results: normalizedData.result,
        search_term: action.payload.input
      };

    case "ADD_TO_FAVOURITES":

    return {
      ...state,
      ...state.recipes[action.payload.id],
      isFavourite: true
    }
    case "REMOVE_FROM_FAVOURITES":
    return {
      ...state,
      ...state.recipes[action.payload.id],
      isFavourite: false
    }

    default:
      return state;
  }
}
