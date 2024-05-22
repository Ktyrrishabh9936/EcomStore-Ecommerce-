// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { SearchOffSharp, SearchSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({...rest}) => {
  const navigate = useNavigate();
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

  const handleSearch = (e) => {
    e.preventDefault();
    let storedQueries = Cookies.get('searchQueries');
    storedQueries = storedQueries ? JSON.parse(storedQueries) : [];
    if (!storedQueries.includes(query)) {
      storedQueries.push(query);
      Cookies.set('searchQueries', JSON.stringify(storedQueries));
    }
    navigate('/searcheditems')
  };

  return (
    <form className="relative flex w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products"
        {...rest}
        onFocus={handleChange}
      />
      <button
        type='submit'
        onClick={handleSearch}
        className=" absolute right-2 p-2 text-blue-500 rounded-r-full  h-min"
      >
        <SearchSharp/>
      </button>
      {query && suggestions.length > 0 && (
        <ul className="absolute top-10 z-10 w-full bg-gray-50  border border-gray-300 rounded mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="py-2 px-5 hover:bg-gray-200 cursor-pointer line-clamp-1"
              onClick={() => setQuery(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
