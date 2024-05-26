export const incrementQuantity = (id) => ({
    type: 'INCREMENT_QUANTITY',
    payload: id,
  });
  
  export const decrementQuantity = (id) => ({
    type: 'DECREMENT_QUANTITY',
    payload: id,
  });
  
  export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
  });
  
export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
