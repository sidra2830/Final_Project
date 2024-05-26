import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'T-Shirt', price: 25, image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D', description: 'Comfortable cotton t-shirt.' },
    { id: 2, name: 'Jeans', price: 50, image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Stylish blue jeans.' },
    { id: 3, name: 'Jacket', price: 80, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww', description: 'Warm winter jacket.' },
    { id: 4, name: 'Sneakers', price: 60, image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D', description: 'Comfortable running sneakers.' },
    { id: 5, name: 'Hat', price: 20, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF0fGVufDB8fDB8fHww', description: 'Stylish summer hat.' },
    { id: 6, name: 'Socks', price: 10, image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2tzfGVufDB8fDB8fHww', description: 'Cozy wool socks.' },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <button 
              onClick={() => handleAddToCart(product)} 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
