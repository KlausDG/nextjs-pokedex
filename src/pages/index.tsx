import { ListContainer, PokemonCard } from "@/concepts/pokemon-list/components";
import { PokemonListResponse } from "@/concepts/pokemon-list/types";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function Home({ pokemons, offset }: PokemonListResponse) {
  const router = useRouter();

  return (
    <>
      <ListContainer>
        {pokemons.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} data={pokemon} />
        ))}
      </ListContainer>

      <button onClick={() => router.push(`/?offset=${Number(offset - 10)}`)}>
        {"<"}
      </button>
      <p>You are on page {offset / 10 + 1}</p>
      <button onClick={() => router.push(`/?offset=${Number(offset + 10)}`)}>
        {">"}
      </button>
    </>
  );
}

export const getServerSideProps = async ({
  query: { limit = 10, offset = 0 },
}) => {
  const pokemons = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .then((response) => response.data);

  return {
    props: {
      pokemons,
      offset: Number(offset),
    },
  };
};
