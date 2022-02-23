import React, { useState } from "react";
import { Chip } from "@mui/material";
import "./Moves.scss";
function Moves({ moves }) {
  const [movesList, updateMovesList] = useState(moves);

  const handleDeleteMove = (id) => {
    if (id) {
      const newList = movesList.filter((oneMove) => oneMove.id !== id);
      updateMovesList(newList);
    }
  };
  return (
    <>
      <div className="moves">
        <p className="moves__title">Moves</p>
        <div className="moves__list">
          {movesList.map((move, index) => (
            <React.Fragment key={move.move.name}>
              <div className="moves__move">
                <Chip
                  label={move.move.name}
                  variant="outlined"
                  onDelete={() => handleDeleteMove(move.id)}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Moves;
