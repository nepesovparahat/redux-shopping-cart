import * as actionTypes from "../constants/actionType";

export const setProducts = (products) => {
  return {
    type: actionTypes.GET_ITEMS,
    payload: products,
  };
};

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_ITEMS,
    id: itemID,
  };
};
export const removeCart = (itemID) => {
  return {
    type: actionTypes.DELETE_ITEMS,
    id: itemID,
  };
};
