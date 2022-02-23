import React, { useEffect, useState } from "react";
import LinkTo from "components/atoms/LinkTo/LinkTo";
import "./ListPokemon.scss";
import ListPokemonC from "components/organisms/ListPokemonC/ListPokemonC";
import { getPokemons } from "services/getPokemons";
import Loading from "components/atoms/Loading/Loading";

function ListPokemon() {
  const [list, updateList] = useState([]);
  const [loading, updateLoading] = useState(false);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    updateLoading(true);
    const list = await getPokemons();
    updateList(list);
    updateLoading(false);
  };

  return (
    <>
      <LinkTo url={"home"} text={"Home"} />

      <div className="list-pokemon">
        <h2 className="list-pokemon__title">Pokemon List</h2>
        {loading ? <Loading /> : <ListPokemonC list={list} />}
      </div>
    </>
  );
}

export default ListPokemon;
