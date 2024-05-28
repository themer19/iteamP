export const addToCart = (product) => {
    return {
      type: "ADD_TO_CART",
      payload: product,
    };
  };
  
  export const removeFromCart = (product) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: product,
    };
  };
  
  // actions/index.js

export const incrementQuantity = (product) => {
    return {
      type: 'INCREMENT_QUANTITY',
      payload: product
    };
  };
  
  export const decrementQuantity = (product) => {
    return {
      type: 'DECREMENT_QUANTITY',
      payload: product
    };
  };
  export const clearCart = () => {
    return {
      type: 'CLEAR_CART'
    };
  };