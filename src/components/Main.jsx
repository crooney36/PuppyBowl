import React, { useEffect, useState } from "react";
import { Navbar, Search } from "../components";
import Puppies from "./Puppies";
import SinglePuppy from "./SinglePuppy";

const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et/players";

const Main = () => {
  const [puppies, setPuppies] = useState([]);
  const [selectedPuppy, setSelectedPuppy] = useState({});

  const getPuppies = async () => {
    try {
      const response = await fetch(BASE_URL);
      const info = await response.json();
      setPuppies(info.data.players);
    } catch (err) {
      console.error(err);
    }
  };

  async function selectPuppy(puppyId) {
    try {
      const response = await fetch(`${BASE_URL}/${puppyId}`);
      const info = await response.json();
      const puppy = info.data.player;
      setSelectedPuppy(puppy);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPuppies();
  }, []);

  return (
    <div id="main">
      <Navbar />
      <Search puppies={puppies} />
      <div id="puppyPage">
        {selectedPuppy.id ? (
          <SinglePuppy selectedPuppy={selectedPuppy} />
        ) : (
          <Puppies puppies={puppies} selectPuppy={selectPuppy} />
        )}
      </div>
    </div>
  );
};

export default Main;
