import React from "react"

const SinglePuppy = (props) => {
    return(
        <div id="dogDetails">
            <h4>{props.selectedPuppy.name}</h4>
            <img src={props.selectedPuppy.imageUrl} width='40%' height='40%'/>
            <p>{props.selectedPuppy.breed}</p>
            <p>{props.selectedPuppy.team.name}</p>
            <p>{props.selectedPuppy.status}</p>
        </div>
    )
}

export default SinglePuppy