import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("Migos");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segement">
      <form onSubmit={onSubmit} className="ui form">
        <h3>Search for a video here:</h3>
        <input type="text" value={term} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
