import axios from "axios";

const getInfoPokemon = async (url) => {
  try {
     
    const { data } = await axios.get(url);

   console.log(data);
 //  return data.results;
  } catch (err) {
    console.log(err);
  }
};

export { getInfoPokemon };
