import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import recipes from 'reducers/recipes';

const rootRuducer = combineReducers({
    recipes,
    routing: routerReducer,
})

export default rootRuducer