const initialState = {
  ingredients: []
};

export default function shopping(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEMS_TO_LIST":
    console.log(action.payload)
      return {
        ingredients: [...state.ingredients, ...action.payload]
      };
    case "REMOVE_ITEM_FROM_LIST":
    return state
    case "UPDATE_COUNT":
    return state
    default:
      return state;
  }
}
