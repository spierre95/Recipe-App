import { combineReducers } from 'redux';
import search from './search';
import favourites from './favourites';
import recipes from './recipes';

const rootRuducer = combineReducers({
    search, favourites, recipes
})

export default rootRuducer