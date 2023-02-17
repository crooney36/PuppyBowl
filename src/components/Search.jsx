import React, { useEffect, useState } from "react";
import SinglePuppy from "./SinglePuppy";

function Search(props) {
  const names = ["Anise, Bert, Crumpet"];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = names.filter(() => {
      names.includes(searchTerm);
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div id="search-view">
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={searchTerm}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {searchResults.map((item) => (
          <li>item</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
