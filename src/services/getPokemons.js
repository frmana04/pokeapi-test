import axios from "axios";

const getPokemons = async () => {
  try {
      console.log("process:", `${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_URL_POKEMONS}`);
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_URL_POKEMONS}`
    );

   console.log(data)
  } catch (err) {
    console.log(err);
  }
};

export { getPokemons };
