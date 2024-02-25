import React from "react";
import { lazy } from "react";

const MainPage = lazy(() => import('../../pages/mainPage'))
const Pocemon = lazy(() => import('../../pages/pokemonInfo'))

const RoutesForCustomer = [
  {
    path: "",
    element: <MainPage />,
    name: "Main",
    subputh: ""
  },
  {
    path: "/pokemons",
    element: <MainPage />,
    name: "Main",
    subputh: ""
  },
  {
    path: "/pokemon",
    element: <Pocemon />,
    name: "Pocemon",
    subputh: "/:id"
  },
];

export default RoutesForCustomer;
