import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "components/pages/Home/Home";

const createRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
   
  </Routes>
);

export default createRoutes;
