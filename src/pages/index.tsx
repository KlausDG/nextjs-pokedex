import Head from "next/head";
import { PokemonCard } from "@/components/card/card";
import axios from "axios";

type PokemonList = {
  pokemons: { results: [{ url: string }] };
};

export default function Home({ pokemons }: PokemonList) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pokemons.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} data={pokemon} />
        ))}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const pokemons = await axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.data);

  return {
    props: {
      pokemons,
    },
  };
};
