import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>

      <Link  to="/list-pokemon">
       List Pokemons
      </Link>
    </>
  );
}

export default Home;
