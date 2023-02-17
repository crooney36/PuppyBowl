import React from "react";

function PuppyCard(props) {
  return (
    <div id="puppyCard">
      <img src={props.puppy.imageUrl} width="200px" height="300px" />
      <h1>{props.puppy.name}</h1>
      <h2>Breed: {props.puppy.breed}</h2>
      <h2>Status: {props.puppy.status}</h2>
      <button
        id="seeDetailsBtn"
        onClick={() => props.selectPuppy(props.puppy.id)}
      >
        See Details
      </button>
    </div>
  );
}

export default PuppyCard;
