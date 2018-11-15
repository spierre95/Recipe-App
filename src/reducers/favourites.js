import { normalize } from "normalizr";
import { recipesSchema } from "schema/recipe";

const initialState = {
  recipes: {},
  results: []
};

export default function favourites(state = initialState, action) {
  let normalizedData;
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      normalizedData = normalize(action.payload, [recipesSchema]);

      return {
        ...state,
        recipes: {
          ...state.recipes,
          ...normalizedData.entities.recipes
        },
        results: [...state.results, ...normalizedData.result]
      };

    case "REMOVE_FROM_FAVOURITES":
      let recipes = Object.keys(state.recipes).reduce(
        (acc, cur) =>
          cur === action.payload.recipe.recipe_id
            ? acc
            : { ...acc, [cur]: state.recipes[cur] },
        {}
      );

      let results = state.results.filter(id => id !== action.payload.recipe.recipe_id)

      return {
        ...state,
        recipes,
        results
      };

    default:
      return state;
  }
}
