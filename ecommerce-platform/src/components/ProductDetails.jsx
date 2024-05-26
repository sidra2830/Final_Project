import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600 text-xl">Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Product Details for Product {id}</h1>
      {product ? (
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl mb-2">${product.price}</p>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-4" />
          <p className="text-gray-700">{product.description}</p>
        </div>
      ) : (
        <p className="text-xl">Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
