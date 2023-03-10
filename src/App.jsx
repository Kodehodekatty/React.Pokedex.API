import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import React from "react";
import PokeCard from "./components/PokeCard";
import CloserView from "./components/CloserView";
import pokemonbackground from "../src/videoplayback.mp4";

import styles from "./components/styles.module.css";

export default function App() {
  const fetchUrl = "https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251/";

  const [error, setError] = useState(false);

  const [pokemonList, setListPokemon] = useState();

  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    async function getData() {
      let listOfPokemonUrls = await fetch(fetchUrl).then((res) => res.json());
      setListPokemon(
        await Promise.all(
          listOfPokemonUrls.results.map((item) =>
            fetch(item.url).then((res) => res.json())
          )
        )
      );
    }
    getData();
  }, []);

  function onClick(item) {
    setSelectedPokemon(item);
  }

  if (!pokemonList || pokemonList.length == 0) return <p>loading</p>;

  return (
    <div className={styles.appcontainer}>
      <div className={styles.wrapper}>
        {pokemonList.map((item, index) => {
          return (
            <PokeCard
              item={item}
              key={index}
              onClickHandler={() => {
                onClick(item);
              }}
            />
          );
        })}
      </div>
      <CloserView item={selectedPokemon} />
    </div>
  );
}
