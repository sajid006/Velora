import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../utils/constants';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const offset = (page - 1) * limit;
        const response = await axios.get(`${apiUrl}/categories?offset=${offset}&limit=${limit}`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [page]);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page > 1 ? page - 1 : 1);

  return (
    <div className="p-4 my-12 bg-gradient-to-r from-blue-100 to-purple-200">
      <input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="grid grid-cols-4 gap-4">
        {filteredCategories.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded-2xl shadow-md">
            <img src={category.image_url} alt={category.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-2">{category.name}</h2>
            <a href={category.link} className="text-blue-500 hover:underline cursor-pointer">Shop now</a>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevPage} disabled={page === 1} className="p-2 bg-blue-500 text-white rounded-2xl disabled:bg-gray-300">Previous</button>
        <button onClick={nextPage} className="p-2 bg-blue-500 text-white rounded-2xl">Next</button>
      </div>
    </div>
  );
};
