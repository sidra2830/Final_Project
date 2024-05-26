import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get('/api/products.js');
        setOrders(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  if (loading) {
    return <div className="p-4 text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600 text-xl">Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Order History</h1>
      {orders.length === 0 ? (
        <p className="text-xl">You have no past orders.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Order #{order.id}</h2>
              <p className="text-lg mb-2">Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className="text-lg mb-2">Total: ${order.total}</p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Items:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {order.items.map(item => (
                    <li key={item.id} className="text-lg">
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;