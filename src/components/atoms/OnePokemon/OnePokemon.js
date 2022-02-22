import React from "react";
import "./OnePokemon.scss";
import { Chip } from "@mui/material";
import { getRandomColor } from "helpers/helpers";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
function OnePokemon({ name, url }) {
  console.log(getRandomColor());
  const handleClick = () => {
    console.log(url);
  };
  return (
    <>
      <Chip
        icon={<CatchingPokemonIcon />}
        label={name}
        onClick={handleClick}
        color={getRandomColor()}
      />
    </>
  );
}

export default OnePokemon;
