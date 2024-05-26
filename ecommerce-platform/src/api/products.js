import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products/1', {
    headers: {
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
      'x-rapidapi-host': 'example.com',
    },
  });
  return response.data;
};

export default fetchProducts;
