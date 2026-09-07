import { useState, useEffect } from "react";
import type { types } from "util";
import CloseIcon from "../components/CloseIcon";

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

      {selectedUrl && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl p-8 min-w-80">
            <button
              onClick={() => {
                setDetail(null);
                setSelectedUrl(null);
              }}
              className="absolute w-8 right-3 top-3 text-slate-500 hover:text-slate-800"
            >
              <CloseIcon />
            </button>

            {detail ? (
              <div className="flex flex-col items-center gap-3">
                <img
                  src={detail.sprites.other["official-artwork"].front_default}
                  alt={detail.name}
                  className="w-48 h-48"
                />

                <p className="text-3xl font-bold capitalize">{detail.name}</p>

                <div className="flex gap-6 text-slate-600">
                  <p>Height: {detail.height / 10} m</p>
                  <p>Weight: {detail.weight / 10} kg</p>
                </div>
                <div className="flex gap-2">
                  {detail.types.map((t) => (
                    <span
                      key={t.type.name}
                      className="px-3 py-1 rounded-full bg-slate-200 capitalize"
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-slate-400">Loading...</p>
            )}
          </div>
        </div>
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
