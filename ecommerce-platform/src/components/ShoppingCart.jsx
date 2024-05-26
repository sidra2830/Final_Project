import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/actions/cartActions';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p className="text-xl">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.items.map(item => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-xl">${item.price} x {item.quantity}</p>
                <p className="text-lg font-semibold">Subtotal: ${item.price * item.quantity}</p>
                <div className="flex items-center mt-2">
                  <button 
                    onClick={() => handleDecrement(item.id)} 
                    className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    onClick={() => handleIncrement(item.id)} 
                    className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button 
                onClick={() => handleRemove(item.id)} 
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;