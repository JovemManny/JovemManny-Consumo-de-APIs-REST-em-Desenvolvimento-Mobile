import axios from "axios";

export const getPokemonList = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  return res.data.results;
};

export const getPokemonDetails = async (url: string) => {
  const res = await axios.get(url);
  return res.data; // Aqui vem o id
};