
const initialState = {
  fetching:false
}


export default function recipes(state = initialState, action) {
  switch (action.type) {

    case "REQUEST_RECIPES":
    return{
      fetching: true
    }

    case "RECEIVE_RECIPES":
      
      return {
        fetching: false,
        recipes: action.payload,
      };

    default:
      return state;
  }
}
