import styles from "./styles.module.css";
import styling from "./DetailView.module.css";
import { useState, useEffect } from "react";
import { usePokemon } from "../hooks/usePokemon";
import React from "react";

const PokeCard = ({ pokemonUrl, onClickHandler }) => {
  const pokemon = usePokemon(pokemonUrl);

  if (!pokemon) return null;
  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <p className={styles.number}> #{pokemon.id}</p>
        <img
          src={pokemon.sprites.front_default}
          alt=""
          className={styles.spriteImages}
          onclick={() => onClickHandler(pokemonUrl)}
        />
      </div>
    </div>
  );
};

export default PokeCard;
