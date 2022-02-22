import React from "react";
import "./OnePokemon.scss";
import { Chip } from "@mui/material";
import { getRandomColor } from "helpers/helpers";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {getInfoPokemon} from 'services/getInfoPokemon';
function OnePokemon({ name, url }) {
 
 
  const handleClick = () => {
    getInfoPokemon(url);
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
