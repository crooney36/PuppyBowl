import React from "react";
import PuppyCard from "./PuppyCard";
import { Search } from "../components";

const Puppies = (props) => {
  const puppyInfo = props.puppies;

  return (
    <div id="puppyCards">
      <Search puppies={props.puppies} setPuppies={props.setPuppies} />
      {puppyInfo.map((e) => {
        return (
          <PuppyCard key={e.id} puppy={e} selectPuppy={props.selectPuppy} />
        );
      })}
    </div>
  );
}

export default Puppies;
