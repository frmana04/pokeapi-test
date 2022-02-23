import React from "react";
import "./OnePokemon.scss";
import { Chip } from "@mui/material";
import { getRandomColor } from "helpers/helpers";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

function OnePokemon({ name, id }) {
  return (
    <>
      <Chip
        icon={<CatchingPokemonIcon />}
        label={name}
        color={getRandomColor(id)}
      />
    </>
  );
}

export default OnePokemon;
