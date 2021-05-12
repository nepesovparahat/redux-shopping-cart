import { actionTypes } from "../constants/actionType";

export const setProducts = (products) => {
  return {
    type: actionTypes.GET_ITEMS,
    payload: products,
  };
};

export const seletctProducts = (product) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product,
  };
};
