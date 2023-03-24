import { useState, useEffect } from "react";

export const usePokemon = (url) => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    console.log("fetching pokemon", pokemon);
    async function getPokemon() {
      if (!url) return;
      const res = await fetch(url);
      const pokemon = await res.json();
      setPokemon(pokemon);
      console.log("fetching pokemon", pokemon);
    }
    getPokemon();
  }, [url]);

  return pokemon;
};
