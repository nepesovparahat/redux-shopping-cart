import { actionTypes } from "../constants/actionType";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const seletctProducts = (product) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product,
  };
};
