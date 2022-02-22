import LinkTo from "components/atoms/LinkTo/LinkTo";
import React from "react";
import "./ListPokemon.scss";

function ListPokemon() {
  return (
    <>
      <LinkTo url={"home"} text={"Home"} />

      <div className="list-pokemon">
        <h2 className="list-pokemon__title">Pokemon List</h2>
        <div className=""></div>
      </div>
    </>
  );
}

export default ListPokemon;
