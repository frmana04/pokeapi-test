import axios from "axios";

const getPokemonForms = async (url) => {
  try {
     
    const { data } = await axios.get(url);
    const {id,is_battle_only} = data
 return {id,is_battle_only} ;
  } catch (err) {
    console.log(err);
  }
};

export { getPokemonForms };
