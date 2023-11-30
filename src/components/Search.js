import React from "react";

function Search({ handleSearch,searchTerm }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
