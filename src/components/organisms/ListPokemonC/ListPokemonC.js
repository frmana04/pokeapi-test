import React, { useState } from "react";
import "./ListPokemonC.scss";
import OnePokemon from "components/atoms/OnePokemon/OnePokemon";
import { DataGrid } from "@mui/x-data-grid";
import { getInfoPokemon } from "services/getInfoPokemon";
import { useNavigate } from "react-router-dom";
import { filterByWord } from "helpers/helpers";
function ListPokemonC({ list }) {
  const navigate = useNavigate();
  const [gridList, updateGridList] = useState(list);

  const manageChangeInput = (ev) => {
    updateGridList(filterByWord(list, ev.target.value));
  };

  const manageClickCell = async (cell) => {
    try {
      const info = await getInfoPokemon(cell.row.url);
      navigate("/detail-pokemon", { state: info });
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: "200",
      renderCell: (params) => {
        return <OnePokemon name={params.row.name} id={params.row.id} />;
      },
    },
    {
      field: "url",
      headerName: "URL",
      width: "300",
    },
  ];

  return (
    <>
      <div className="list-pokemonC">
        <input
          className="list-pokemonC__input"
          placeholder="Search pokemon..."
          type={"text"}
          onChange={manageChangeInput}
        />
        <div className="list-pokemonC__grid">
          <DataGrid
            onCellClick={manageClickCell}
            autoHeight={true}
            rows={gridList}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
}

export default ListPokemonC;
