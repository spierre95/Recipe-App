import { combineReducers } from "redux";
import search from "./search";
import favourites from "./favourites";
import recipes from "./recipes";
import shopping from "./shopping";

const rootRuducer = combineReducers({
  search,
  favourites,
  recipes,
  shopping
});

export default rootRuducer;
