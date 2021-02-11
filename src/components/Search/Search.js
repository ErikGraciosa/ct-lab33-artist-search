import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search({ setSearch }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired
};
