import React from "react";
import PuppyCard from "./PuppyCard";

function Puppies(props) {
  const puppyInfo = props.puppies;

  return (
    <div id="puppyCards">
      {puppyInfo.map((e) => {
        return (
          <PuppyCard key={e.id} puppy={e} selectPuppy={props.selectPuppy} />
        );
      })}
    </div>
  );
}

export default Puppies;
