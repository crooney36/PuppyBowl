import React from "react";
import PuppyCard from "./PuppyCard";

function Puppies(props) {
  const puppies = props.puppies;

  return (
    <div id="puppyCards">
      {puppies.map((e, idx) => {
        return <PuppyCard key={e.idx} puppies={e} />;
      })}
    </div>
  );
}

export default Puppies;
