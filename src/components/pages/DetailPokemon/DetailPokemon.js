import React,{ useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import LinkTo from "components/atoms/LinkTo/LinkTo";
import "./DetailPokemon.scss";
import { getPokemonForms } from "services/getPokemonForms";
import { Chip } from "@mui/material";
import { setId } from "helpers/helpers";

function DetailPokemon() {
  const { state } = useLocation();
  state.moves = setId(state.moves);

  const [dataForm,updateIsDataForm] = useState({id:'',is_battle_only:''})
  const [movesList,updateMovesList] = useState(state.moves)

  const getForms = async() =>{
      const {id,is_battle_only} = await getPokemonForms(state.forms[0].url);
     
      updateIsDataForm({id,is_battle_only});
  }

  const handleDeleteMove = (id)=>{
    console.log("jeje:",id);
    if (id){
      const newList = movesList.filter(oneMove=>oneMove.id!==id)
      updateMovesList(newList);
    }
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

       <div className="detail__moves-block">
          <p className="detail__moves-title">Moves</p>
        <div className="detail__moves-list">
          {movesList.map((move) => 
          <div className="detail__moves-move">
              <Chip  label={move.move.name} variant="outlined" onDelete={()=>handleDeleteMove(move.id)}  />
          </div>
          )}
        </div> 
        </div>  
    </>
  );
      }

export default DetailPokemon;
