import { ListContainer, PokemonCard } from "@/concepts/pokemon-list/components";
import { PokemonListResponse } from "@/concepts/pokemon-list/types/pokemon-list";
import axios from "axios";

export default function Home({ pokemons }: PokemonListResponse) {
  return (
    <>
      <ListContainer>
        {pokemons.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} data={pokemon} />
        ))}
      </ListContainer>
    </>
  );
}

export const getServerSideProps = async () => {
  const pokemons = await axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.data);

  return {
    props: {
      pokemons,
    },
  };
};
