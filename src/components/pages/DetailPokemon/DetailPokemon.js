import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinkTo from "components/atoms/LinkTo/LinkTo";
import "./DetailPokemon.scss";
import { getPokemonForms } from "services/getPokemonForms";
import DetailsPokemonC from "components/organisms/DetailsPokemonC/DetailsPokemonC";
import { setId } from "helpers/helpers";

function DetailPokemon() {
  const { state } = useLocation();

  const [dataForm, updateIsDataForm] = useState({ id: "", is_battle_only: "" });

  const getForms = async () => {
    const { id, is_battle_only } = await getPokemonForms(state.forms[0].url);

    updateIsDataForm({ id, is_battle_only });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    state.moves = setId(state.moves);
    getForms();
  }, []);

  return (
    <>
      <LinkTo url={"home"} text={"Home"} />
      <LinkTo url={"list-pokemon"} text={"Pokemon List"} />
      <h2 className="detail__title">Details</h2>
      <DetailsPokemonC info={state} dataForm={dataForm} />
    </>
  );
}

export default DetailPokemon;
