const initialState = {
  list: {}
};

export default function shopping(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEMS_TO_LIST":
      
    return {
        ...state,
        list : {
          ...state.list,
          [action.payload.recipe_id]: {
            title:action.payload.title,
            servingSize: action.payload.servingSize,
            ingredients: action.payload.ingredients
          }
        }
      };
    case "REMOVE_ITEM_FROM_LIST":
   const newIngredients = state.list[action.payload.recipe_id].ingredients.filter(item => item.id !== action.payload.item_id)

    return {
      ...state,
      list : {
        ...state.list,
        [action.payload.recipe_id]: {
          ...state.list[action.payload.recipe_id],
          ingredients: newIngredients
        }
      }
    };
    case "REMOVE_RECIPE_FROM_LIST" : 
    const removeRecipeId = action.payload
    const { [removeRecipeId]:value , ...newList} = state.list 
    return {
      ...state,
      list: newList
    }
    case "DECREASE_INGRIDIENT_COUNT":
      const decreaseCount = state.list[action.payload.recipe_id].ingredients.map(element => {
        const newCount =
          element.id === action.payload.item_id 
            ? element.count - 1
            : element.count;
        return {
          id: element.id,
          ingredient: element.ingredient,
          count: newCount,
          unit: element.unit
        };
      });

      return {
        ...state,
        list : {
          ...state.list,
          [action.payload.recipe_id]: {
            ...state.list[action.payload.recipe_id],
            ingredients: decreaseCount
          }
        }
      };
    case "INCREASE_INGRIDIENT_COUNT":
      const increaseCount = state.list[action.payload.recipe_id].ingredients.map(element => {
        const newCount =
          element.id === action.payload.item_id 
            ? element.count + 1
            : element.count;
        return {
          id: element.id,
          ingredient: element.ingredient,
          count: newCount,
          unit: element.unit
        };
      });

      return {
        ...state,
        list : {
          ...state.list,
          [action.payload.recipe_id]: {
            ...state.list[action.payload.recipe_id],
            ingredients: increaseCount
          }
        }
      };

    default:
      return state;
  }
}
