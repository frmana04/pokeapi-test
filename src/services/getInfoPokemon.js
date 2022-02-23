import axios from "axios";

const getInfoPokemon = async (url) => {
  try {
     
    const { data } = await axios.get(url);

 return data ;
  } catch (err) {
    console.log(err);
  }
};

export { getInfoPokemon };
