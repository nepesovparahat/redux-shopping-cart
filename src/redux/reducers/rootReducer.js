import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productsAll"],
};
const reducers = combineReducers({
  productsAll: productReducer,
});

export default persistReducer(persistConfig, reducers);
