import React, { useState } from "react";

const Search = ({ handleMovieSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleMovieSearch(searchValue);
    setSearchValue("");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="search_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search_input"
        onChange={handleChange}
        value={searchValue}
      />
      <button type="submit" className="search_button">
        Search
      </button>
    </form>
  );
};

export default Search;
