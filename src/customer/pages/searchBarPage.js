// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { SearchOffSharp, SearchSharp } from '@mui/icons-material';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const storedQueries = Cookies.get('searchQueries');
    if (storedQueries) {
      setSuggestions(JSON.parse(storedQueries));
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      const storedQueries = Cookies.get('searchQueries');
      if (storedQueries) {
        setSuggestions(JSON.parse(storedQueries));
      }
    }
  };

  const handleSearch = () => {
    let storedQueries = Cookies.get('searchQueries');
    storedQueries = storedQueries ? JSON.parse(storedQueries) : [];
    if (!storedQueries.includes(query)) {
      storedQueries.push(query);
      Cookies.set('searchQueries', JSON.stringify(storedQueries));
    }
  };

  return (
    <div className=" flex w-full max-w-md mx-auto mt-10 ">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none h-min"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className=" relative -left-10 p-2 text-blue-500  hover:bg-blue-600 h-min"
      >
        <SearchSharp/>
      </button>
      {query && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setQuery(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
