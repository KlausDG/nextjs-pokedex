import axios from "axios";

export const getPokemon = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
};
