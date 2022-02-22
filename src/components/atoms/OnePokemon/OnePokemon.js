import React from "react";
import "./OnePokemon.scss";
import { Chip } from "@mui/material";
import { getRandomColor } from "helpers/helpers";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {getInfoPokemon} from 'services/getInfoPokemon';
import { useNavigate } from "react-router-dom";


function OnePokemon({ name, url }) {
console.log("render");
  const navigate = useNavigate();
  const handleClick = async () => {
  
    const info = await getInfoPokemon(url);
    navigate("/detail-pokemon", {state:info });
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
