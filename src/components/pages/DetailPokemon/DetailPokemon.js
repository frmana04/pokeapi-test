import React,{ useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import LinkTo from "components/atoms/LinkTo/LinkTo";
import "./DetailPokemon.scss";
import { getPokemonForms } from "services/getPokemonForms";
function DetailPokemon() {
  const { state } = useLocation();
  const [dataForm,updateIsDataForm] = useState({id:'',is_battle_only:''})
  const getForms = async() =>{
      const {id,is_battle_only} = await getPokemonForms(state.forms[0].url);
     
      updateIsDataForm({id,is_battle_only});
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    getForms();
  },[])

  return (
    <>
   
   
      <LinkTo url={"home"} text={"Home"} />
      <LinkTo url={"list-pokemon"} text={"Pokemon List"} />
      <h2 className="detail__title">Details</h2>
      <div className="detail">
        <p className="detail__name">{state.name}</p>
        <div>
          <img
            className="detail__img"
            src={state.sprites.back_default}
            alt="sprite"
          />
        </div>
        <div>
          <p className="detail__abilities-title">Abilities</p>
          {state.abilities.map((element) =>
            element.is_hidden ? <></> : <p>-{element.ability.name}</p>
          )}
        </div>
        <div>
          <p className="detail__move-forms">Forms</p>
            <p>id: {dataForm.id}</p>
            <p>Is battle only: {dataForm.is_battle_only.toString()}</p>
        </div>
   
      </div>

      <div>
          <p className="detail__move-title">Moves</p>

          {state.moves.map((move) => (
            <p>{move.move.name}</p>
          ))}
        </div>
    </>
  );
}

export default DetailPokemon;
