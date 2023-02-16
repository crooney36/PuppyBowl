import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import Puppies from "./Puppies";

const Main = () => {
  const BASE_URL =
    "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et/players";

  const [puppies, setPuppies] = useState([]);
  // const [selectedPuppy, setSelectedPuppy] = useState([]);

  try {
    const getPuppies = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      console.log(data);
      return data;
    };
    getPuppies();
  } catch (err) {
    console.error(err);
  }

  // useEffect(() => {
  //   getPuppies();
  // }, []);

  return (
    <div id="main">
      <Navbar />
      <Puppies puppies={puppies} />
    </div>
  );
};

export default Main;
