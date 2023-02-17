import React from "react";

const SinglePuppy = (props) => {
  return (
    <div id="dogDetails">
      <h4>{props.selectedPuppy.name}</h4>
      <img src={props.selectedPuppy.imageUrl} width="20%" height="20%" />
      <p>Breed: {props.selectedPuppy.breed}</p>
      <p>Team Name: {props.selectedPuppy.team.name}</p>
      <p>Status: {props.selectedPuppy.status}</p>
    </div>
  );
};

export default SinglePuppy;
