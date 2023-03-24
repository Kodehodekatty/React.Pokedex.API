import React from "react";
import { useState } from "react";
import { typeColor } from "./PokemonTypes";
import styling from "./DetailView.module.css";
import { usePokemon } from "../hooks/usePokemon";

export default function CloserView({ pokemonUrl }) {
  const pokemon = usePokemon(pokemonUrl);

  if (!pokemon || pokemon == {})
    return <section className={styling.closerview}></section>;

  const [shiny, setShiny] = useState(false);

  const [style, setStyle] = useState("");

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
          src={shiny ? item.sprites.front_shiny : item.sprites.front_default}
          className={styling.closerviewpokemon}
        />
        <div className={styling.databox}>
          {" "}
          <p className={styling.itemIDtag}> ID: {item.id} </p>{" "}
          <p className={styling.itemnametag}>{item.name} </p>
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
              {item.types.length === 1 ? (
                <p
                  className={styling.typebox}
                  style={{
                    backgroundColor: `${typeColor(item.types[0].type.name)}`,
                  }}
                >
                  {item.types[0].type.name}
                </p>
              ) : (
                <li className={styling.datachar}>
                  <p
                    className={styling.typebox}
                    style={{
                      backgroundColor: `${typeColor(item.types[0].type.name)}`,
                    }}
                  >
                    {item.types[0].type.name}
                  </p>
                  <p
                    className={styling.typebox}
                    style={{
                      backgroundColor: `${typeColor(item.types[1].type.name)}`,
                    }}
                  >
                    {item.types[1].type.name}
                  </p>
                </li>
              )}{" "}
            </section>
          </li>

          <li className={styling.datachar}>
            {" "}
            <h1>Height</h1> <p className={styling.answer}>{item.height}</p>
          </li>
          <li className={styling.datachar}>
            {" "}
            <h1> Weight</h1> <p className={styling.answer}>{item.weight}</p>
          </li>
        </ul>
      </main>
    </section>
  );
}
