const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const products = [
    {
      id: generateUniqueId(),
      name: 'Premium Leather Jacket',
      price: 249.99,
      description: 'A stylish leather jacket made from premium quality leather.',
      releaseDate: '2023-09-01',
      origin: 'Italy',
      image: 'https://th.bing.com/th/id/OIP.trgHvhRyIMcU8lupuBgl0QHaI4?pid=ImgDet&rs=1',
      category: "Clothing",
    },

    {
      id: generateUniqueId(),
      name: 'Classic Vintage Watch',
      price: 129.95,
      description: 'An elegant vintage watch that blends style and functionality.',
      releaseDate: '2023-08-15',
      origin: 'Switzerland',
      image: 'https://th.bing.com/th/id/R.afc01077e0387ba3f179202f5ffc974c?rik=r5E2JcGkhIXqRA&pid=ImgRaw&r=0', 
      category: "Accessories",
    },

    {
      id: generateUniqueId(),
      name: 'Organic Green Tea',
      price: 14.99,
      description: 'A soothing blend of organic green tea leaves with a mild flavor.',
      releaseDate: '2023-07-05',
      origin: 'Japan',
      image: 'https://th.bing.com/th/id/OIP.NOe00Xnp4EZTCA9JWs3M7wHaHY?pid=ImgDet&rs=1', 
      category: "Food & Beverages",
    },
  ];
  
  export default products;
  