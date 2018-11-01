


export default function recipes( state={}, action){

    switch(action.type){
        case 'RECEIVE_RECIPES':

        console.log(action.payload)
        
        return state

        default:
        return state
    } 
}