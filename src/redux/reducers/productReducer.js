import { actionTypes } from "../constants/actionType";
import data from "../../assets/data";
const initialState = {
  products: data,
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case actionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
