import React from "react";
import ReactDOM from "react-dom/client";
import { Main, Puppies, SinglePuppy } from "./components";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<Main />);
