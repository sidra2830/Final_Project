import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-5xl font-bold text-white">Welcome to Sidra's E-commerce Platform</h1>
      <ul class="flex space-x-4 p-4 bg-gray-800 text-white absolute top-0 w-screen items-center justify-center bg-black gap-40">
        <li>
          <Link to="/products" class="hover:text-yellow-300 transition duration-300">Products</Link>
        </li>
        <li>
          <Link to="/cart" class="hover:text-yellow-300 transition duration-300">Shopping Cart</Link>
        </li>
        <li>
          <Link to="/checkout" class="hover:text-yellow-300 transition duration-300">Checkout</Link>
        </li>
        <li>
          <Link to="/order-history" class="hover:text-yellow-300 transition duration-300">Order History</Link>
        </li>
        <li>
          <Link to="/admin" class="hover:text-yellow-300 transition duration-300">Admin Panel</Link>
        </li>
      </ul>

    </div>
  );
};

export default LandingPage;


