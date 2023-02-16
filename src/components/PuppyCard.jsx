import React from "react";

function PuppyCard(props) {
  const name = props.name;
  const breed = props.breed;
  const imgURL = props.imgURL;
  const status = props.status;
  const teamID = props.teamID;

  return (
    <div>
      <img>{(src = { imgURL })}</img>
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <h2>{status}</h2>
      <h2>{teamID}</h2>
    </div>
  );
}

export default PuppyCard;
