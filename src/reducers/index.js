import { combineReducers } from 'redux';
import search from 'reducers/search';
import favourites from 'reducers/favourites';

const rootRuducer = combineReducers({
    search, favourites
})

export default rootRuducer