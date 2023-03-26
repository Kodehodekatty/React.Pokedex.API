import React from "react";
import { useState } from "react";
import { typeColor } from "./PokemonTypes";
import styling from "./DetailView.module.css";
import { usePokemon } from "../hooks/usePokemon";

export default function CloserView({ pokemonUrl }) {
  const pokemon = usePokemon(pokemonUrl);

  console.log("new url " + pokemonUrl);

  const [shiny, setShiny] = useState(false);

  const [style, setStyle] = useState("");

  if (!pokemon || pokemon == {})
    return <section className={styling.closerview}></section>;

  const showShiny = () => {
    setShiny(!shiny);
    if (!shiny) {
      setStyle(styling.shinybtnactive);
    } else {
      setStyle("");
    }
  };

  return (
    <section className={styling.closerview}>
      <main className={styling.datawrapper}>
        <img
          src={
            shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default
          }
          className={styling.closerviewpokemon}
        />
        <div className={styling.databox}>
          {" "}
          <p className={styling.itemIDtag}> ID: {pokemon.id} </p>{" "}
          <p className={styling.itemnametag}>{pokemon.name} </p>
          <button
            onClick={() => showShiny()}
            className={styling.shinybtn + " " + style}
          >
            Show Shiny
          </button>
        </div>
        <ul className={styling.datalist}>
          <li className={styling.datachar}>
            {" "}
            <h1> Type</h1>
            <section className={styling.typeframe}>
              {pokemon.types.length === 1 ? (
                <p
                  className={styling.typebox}
                  style={{
                    backgroundColor: `${typeColor(pokemon.types[0].type.name)}`,
                  }}
                >
                  {pokemon.types[0].type.name}
                </p>
              ) : (
                <li className={styling.datachar}>
                  <p
                    className={styling.typebox}
                    style={{
                      backgroundColor: `${typeColor(
                        pokemon.types[0].type.name
                      )}`,
                    }}
                  >
                    {pokemon.types[0].type.name}
                  </p>
                  <p
                    className={styling.typebox}
                    style={{
                      backgroundColor: `${typeColor(
                        pokemon.types[1].type.name
                      )}`,
                    }}
                  >
                    {pokemon.types[1].type.name}
                  </p>
                </li>
              )}{" "}
            </section>
          </li>

          <li className={styling.datachar}>
            {" "}
            <h1>Height</h1> <p className={styling.answer}>{pokemon.height}</p>
          </li>
          <li className={styling.datachar}>
            {" "}
            <h1> Weight</h1> <p className={styling.answer}>{pokemon.weight}</p>
          </li>
        </ul>
      </main>
    </section>
  );
}
