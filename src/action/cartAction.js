// actions/cartActions.js
export const INITIALIZE_CART = "INITIALIZE_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const initializeCart = (initialData) => ({
  type: INITIALIZE_CART,
  payload: initialData,
});

export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: id,
});
