import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "components/pages/Home/Home";
import ListPokemon from "components/pages/ListPokemon/ListPokemon";

const createRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list-pokemon" element={<ListPokemon />} />
    <Route path="*" element={<Home />} />

  </Routes>
);

export default createRoutes;
