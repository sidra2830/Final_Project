import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex">

      <div className="w-64 bg-gray-800 text-white p-4 space-y-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/admin/dashboard" className="block hover:bg-gray-700 p-2 rounded transition duration-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/products" className="block hover:bg-gray-700 p-2 rounded transition duration-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="block hover:bg-gray-700 p-2 rounded transition duration-300">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="block hover:bg-gray-700 p-2 rounded transition duration-300">
                Users
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="block hover:bg-gray-700 p-2 rounded transition duration-300">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Welcome to the Admin Panel</h2>
        <p className="text-gray-700 mb-4">Select an option from the sidebar to get started.</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
          <p className="text-gray-600">Here you can find an overview of your site's performance and manage content.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
