import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const AllProducts = ({searchValue, heading}) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(searchValue);
  const [page, setPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState('price');
  const limit = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`, {
          params: {
            search,
            offset: (page - 1) * limit,
            limit
          }
        });
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    searchValue && setSearch(searchValue);
    fetchProducts();
  }, [searchValue, search, page]);


  const filteredProducts = search ? products.filter(product =>product.name.toLowerCase().includes(search.toLowerCase())) : products;


  const sortProducts = (products) => {
    switch (sortCriteria) {
      case 'price':
        return [...products].sort((a, b) => a.price - b.price);
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      case 'new':
        return [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const paginatedProducts = sortedProducts.slice((page - 1) * limit, page * limit);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page > 1 ? page - 1 : 1);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-blue-200">
      {heading && <div className="text-center mb-4">{heading}</div>}
      <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-4 mr-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="sort" className="mx-2">Sort by:</label>
        <select
          id="sort"
          value={sortCriteria}
          onChange={handleSortChange}
          className="p-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="new">New Arrivals</option>
        </select>
      </div>

      </div>
      <div className="grid grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-2xl shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-yellow-500">Rating: {product.rating}</p>
            <p>Added: {product.date}</p>
            <a href="#" className="text-blue-500 hover:underline">View Details</a>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="p-2 bg-blue-500 text-white rounded-2xl disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={page * limit >= filteredProducts.length}
          className="p-2 bg-blue-500 text-white rounded-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};
