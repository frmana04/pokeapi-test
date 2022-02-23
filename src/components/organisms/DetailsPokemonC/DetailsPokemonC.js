import React from "react";
import Moves from "components/molecules/Moves/Moves";
import "./DetailsPokemonC.scss";

function DetailsPokemonC({ info, dataForm }) {
  return (
    <>
      <div className="detail">
        <p className="detail__name">{info.name}</p>
        <div>
          <img
            className="detail__img"
            src={info.sprites.back_default}
            alt="sprite"
          />
        </div>
        <div>
          <p className="detail__abilities-title">Abilities</p>
          {info.abilities.map((element) => (
            <React.Fragment key={element.ability.name}>
              {element.is_hidden ? <></> : <p>-{element.ability.name}</p>}
            </React.Fragment>
          ))}
        </div>
        <div>
          <p className="detail__forms">Forms</p>
          <p>id: {dataForm.id}</p>
          <p>Is battle only: {dataForm.is_battle_only.toString()}</p>
        </div>
      </div>
      <Moves moves={info.moves} />
    </>
  );
}

export default DetailsPokemonC;
