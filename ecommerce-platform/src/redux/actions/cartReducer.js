// const initialState = {
//     items: [
//       // Example item
//       // { id: 1, name: 'Product 1', price: 100, quantity: 1 },
//     ],
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'INCREMENT_QUANTITY':
//         return {
//           ...state,
//           items: state.items.map(item =>
//             item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       case 'DECREMENT_QUANTITY':
//         return {
//           ...state,
//           items: state.items.map(item =>
//             item.id === action.payload && item.quantity > 1
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           ),
//         };
//       case 'REMOVE_FROM_CART':
//         return {
//           ...state,
//           items: state.items.filter(item => item.id !== action.payload),
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;
  
import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
