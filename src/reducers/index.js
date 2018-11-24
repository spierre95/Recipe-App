import { combineReducers } from 'redux';
import search from './search';
import favourites from './favourites';

const rootRuducer = combineReducers({
    search, favourites
})

export default rootRuducer