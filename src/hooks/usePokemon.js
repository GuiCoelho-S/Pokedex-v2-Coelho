/*Esse hook, retorna um array com os nomes dos pokemons que serão usados nos componentes*/

import { createContext, useState, useContext, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../services/api";

const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
    
    }

    fetchData();
  }, []);

  const next = async () => {
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };

  const prev = async () => {
    if (!prevUrl) return;
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  //console.log(pokemonData)

  return (
    <PokemonContext.Provider value={{ pokemonData, next, prev }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function useNomePokemons() {
  const context = useContext(PokemonContext);

  const { pokemonData } = context;

  return { pokemonData };
}

export function useChangePokemons() {
  const context = useContext(PokemonContext);
  const { prev, next } = context;

  return { prev, next };
}
