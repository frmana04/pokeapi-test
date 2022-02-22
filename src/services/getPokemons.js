import axios from "axios";

const getPokemons = async () => {
  try {
    
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_URL_POKEMONS}`
    );

   console.log(data.results);
   return data.results;
  } catch (err) {
    console.log(err);
  }
};

export { getPokemons };
