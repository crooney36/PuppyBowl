import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')

  function searchPuppy(){
    let searchedPuppies = props.puppies.filter(puppy =>
    puppy.name.toLowerCase().includes(searchValue)
    )
    props.setPuppies(searchedPuppies)
  }
  return (
    <div id="search-view">
      <label>
        Search Puppies: 
        <input value={searchValue} onChange={(evt)=>{
          setSearchValue(evt.target.value)
        }} />
      </label>
      <button onClick={() => searchPuppy()}>Search</button>
    </div>
  );
}

export default Search;
