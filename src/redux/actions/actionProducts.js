import * as actionTypes from "../constants/actionType";

export const setProducts = (products) => {
  return {
    type: actionTypes.GET_ITEMS,
    payload: products,
  };
};

export const addToCart = (itemID) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_ITEMS,
    payload: {
      id: itemID,
    },
  });
};

export const removeCart = (itemID) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_ITEMS,
    payload: {
      id: itemID,
    },
  });
};

export const itemIncrease = (itemID) => (dispatch) => {
  dispatch({
    type: actionTypes.INCREASE_ITEM,
    payload: {
      id: itemID,
    },
  });
};

export const itemDecrease = (itemID) => (dispatch) => {
  dispatch({
    type: actionTypes.DECREASE_ITEM,
    payload: {
      id: itemID,
    },
  });
};
