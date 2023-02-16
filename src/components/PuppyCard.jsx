import React from "react";

function PuppyCard(props) {

  return (
    <div id="puppyCard">
      <img src={props.puppy.imageUrl} width='20%' height='20%'/>
      <h1>{props.puppy.name}</h1>
      <h2>{props.puppy.breed}</h2>
      <h2>{props.puppy.status}</h2>
      <button onClick={()=>props.selectPuppy(props.puppy.id)}>See Details</button>
    </div>
  );
}

export default PuppyCard;
