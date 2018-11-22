import { combineReducers } from 'redux';
import search from 'reducers/search';
import favourites from 'reducers/favourites';
import recipes from 'reducers/recipes';

const rootRuducer = combineReducers({
    search, favourites, recipes
})

export default rootRuducer