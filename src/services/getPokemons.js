import axios from "axios";
import { setId, sortByName } from "helpers/helpers";

const getPokemons = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_URL_POKEMONS}`
    );
    const list = setId(data.results);
    const sortedList = sortByName(list);
    return sortedList;
  } catch (err) {
    console.log(err);
  }
};

export { getPokemons };
