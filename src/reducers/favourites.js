export default function favourites(state = [], action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return [...state, action.payload.recipe];

    default:
      return state;
  }
}
