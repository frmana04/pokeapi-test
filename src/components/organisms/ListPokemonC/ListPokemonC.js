import React from "react";
import "./ListPokemonC.scss";
import OnePokemon from 'components/atoms/OnePokemon/OnePokemon'
function ListPokemonC({list}) {
  return <>
  
  <div className="lista-pokemonC">
  {list.map(res=>{
    return <div className="lista-pokemonC__element"> <OnePokemon  name={res.name} url={res.url}/></div>
  })}
  </div>

  </>;
}

export default ListPokemonC;
