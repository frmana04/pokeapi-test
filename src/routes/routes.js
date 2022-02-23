import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "components/pages/Home/Home";
import ListPokemon from "components/pages/ListPokemon/ListPokemon";
import DetailPokemon from "components/pages/DetailPokemon/DetailPokemon";

const createRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list-pokemon" element={<ListPokemon />} />
    <Route path="/detail-pokemon" element={<DetailPokemon />} />

    <Route path="*" element={<Home />} />
  </Routes>
);

export default createRoutes;
