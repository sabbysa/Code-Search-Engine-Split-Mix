import React from "react";
import "./search.css";

const Search = ({ handleChange, handleSearch }) => {
  return (
    <div>
      <div className="container">
        <input
          type="search"
          placeholder="What are you looking for?"
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
