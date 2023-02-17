import React from "react";
import ReactDOM from "react-dom/client";
import { Main, Puppies, SinglePuppy } from "./components";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route path="Puppies">
          <Route index element={<Puppies />} />
          <Route path="id" element={<SinglePuppy />} />
        </Route>
      </Route>
    </>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<Main />);

root.render(<RouterProvider router={router} />);
