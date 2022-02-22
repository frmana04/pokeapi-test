import React from "react";
import "./ListPokemonC.scss";
import OnePokemon from "components/atoms/OnePokemon/OnePokemon";
import { DataGrid } from "@mui/x-data-grid";

function ListPokemonC({ list }) {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: "200",
      renderCell: (params) => {
      

        return <OnePokemon name={params.row.name} url={params.row.url} />;
      },
    },
    {
      field: "url",
      headerName:"URL",
      width:"300",
    }
  ];

  return (
    <>
      <div className="list-pokemonC">
        <DataGrid autoHeight={true} rows={list} columns={columns} />
      </div>
      {/* <div className="list-pokemonC">
        <DataGrid columns={[{ field: "name" }, { field: "url",width:'fit-content' }]} rows={list} />
      </div> */}

      {/* <div className="lista-pokemonC">
  {list.map(res=>{
    return <div className="lista-pokemonC__element"> <OnePokemon  name={res.name} url={res.url}/></div>
  })}
  </div> */}
    </>
  );
}

export default ListPokemonC;
