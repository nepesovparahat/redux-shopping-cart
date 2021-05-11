import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  productsAll: productReducer,
});
export default reducers;
