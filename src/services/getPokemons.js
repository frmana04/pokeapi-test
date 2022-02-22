import axios from "axios";
import { setId } from "helpers/helpers";

const getPokemons = async () => {
  try {
    
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_URL_POKEMONS}`
    );
    const list = setId(data.results)
   console.log(list);
   return list;
  } catch (err) {
    console.log(err);
  }
};

export { getPokemons };
