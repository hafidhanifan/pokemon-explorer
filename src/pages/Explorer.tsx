import { useState, useEffect } from "react";
import type { types } from "util";

type Pokemons = {
  name: string;
  url: string;
};

type DetailPokemons = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemons[] | null>(null);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [detail, setDetail] = useState<DetailPokemons | null>(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
      );
      const data = await response.json();
      setPokemons(data.results);
    }
    getData();
  }, []);

  // make url for each pokemon
  useEffect(() => {
    const url: string | null = selectedUrl;

    async function getData() {
      if (url) {
        const response = await fetch(url);
        const data = await response.json();
        setDetail(data);
      }
    }
    getData();
  }, [selectedUrl]);

  console.log(detail);
  return (
    <div className="w-1/2 mx-auto min-h-screen flex items-center justify-center">
      {pokemons ? (
        <div className="w-full grid grid-cols-4 gap-3">
          {/* map di sini */}

          {pokemons.map((pokemon) => (
            <div
              key={pokemon.name}
              onClick={() => setSelectedUrl(pokemon.url)}
              className="flex flex-col p-4 items-center rounded-2xl bg-white gap-20 cursor-pointer"
            >
              <p className="font-cereal text-4xl">{pokemon.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function Explorer() {
  return (
    <div className="">
      <PokemonList />
    </div>
  );
}

export default Explorer;
