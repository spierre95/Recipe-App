import { get, search } from 'constants/apiRequests'

export function searchRecipes(input) {
    return (dispatch, getState) => {      
    
    return search(input)
        .then(res => {

            console.log(res)
    
        //   dispatch({
        //     type: 'RECEIVE_RECIPES',
        //     payload: recipes,
        //   });
        })
        .catch(error => {
          console.log(error, "error")
        });
    };
  }
  