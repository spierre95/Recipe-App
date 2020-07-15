import { normalize } from "normalizr";
import { recipeSchema } from "../schema/recipe";

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
      const normalizedData = normalize(action.payload, [recipeSchema]);
      normalizedData.entities.recipe[action.payload.recipe.recipe_id][
        "servingSize"
      ] = 1;

      return {
        fetching: false,
        ...state,
        recipes: {
          ...state.recipes,
          ...normalizedData.entities.recipe
        },
        results: [...state.results, ...normalizedData.result]
      };

    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        recipes: {
          ...state.recipes,
          [action.payload.recipe.recipe_id]: {
            ...state.recipes[action.payload.recipe.recipe_id],
            isFavourite: true
          }
        }
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        recipes: {
          ...state.recipes,
          [action.payload.recipe.recipe_id]: {
            ...state.recipes[action.payload.recipe.recipe_id],
            isFavourite: false
          }
        }
      };
    case "UPDATE_SERVING_SIZE":
      let amount = action.payload.type === "increase" ? 1 : -1;

      const newServingSize =
        state.recipes[action.payload.id].servingSize + amount;

      const updateDatedIngredients = state.recipes[
        action.payload.id
      ].ingredients.map(el => {
        const newCount = (el.count *=
          newServingSize / state.recipes[action.payload.id].servingSize);
        return {
          id: el.id,
          count: el.count !== 0 ? newCount : "",
          unit: el.unit,
          ingredient: el.ingredient
        };
      });

      return {
        ...state,
        recipes: {
          ...state.recipes,
          [action.payload.id]: {
            ...state.recipes[action.payload.id],
            ingredients: updateDatedIngredients,
            servingSize: newServingSize
          }
        },
      };
    default:
      return state;
  }
}
