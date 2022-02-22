import LinkTo from "components/atoms/LinkTo/LinkTo";
import React from "react";
import "./ListPokemon.scss";
import {getPokemons} from 'services/getPokemons'
import OnePokemon from "components/atoms/OnePokemon/OnePokemon";
function ListPokemon() {
  getPokemons();
  return (
    <>
      <LinkTo url={"home"} text={"Home"} />

      <div className="list-pokemon">
        <h2 className="list-pokemon__title">Pokemon List</h2>
        <div className="">
          <OnePokemon name={"Pickachu"} url={"https://google.es"}/>
        </div>
      </div>
    </>
  );
}

export default ListPokemon;
