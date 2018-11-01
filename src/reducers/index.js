import { combineReducers } from 'redux';
import recipes from 'reducers/recipes';

const rootRuducer = combineReducers({
    recipes,
})

export default rootRuducer