import { combineReducers } from "redux";
import AffixesReducer from "./reducer_affixes";

const rootReducer = combineReducers({
  affixes: AffixesReducer
});

export default rootReducer;
