import React from "react";
import { useState } from "react";

import styling from "./DetailView.module.css";
import styles from "./styles.module.css";

export default function CloserView({ item }) {
  if (!item || item == {})
    return <section className={styling.closerview}></section>;

  const [shiny, setShiny] = useState(false);

  const showShiny = () => {
    setShiny(!shiny);
  };

  return (
    <section className={styling.closerview}>
      <img
        src={shiny ? item.sprites.front_shiny : item.sprites.front_default}
        className={styling.closerviewpokemon}
      />
      <button onClick={() => showShiny()} className={styling.shinybtn}>
        Show Shiny
      </button>

      <div className={styling.datawrapper}>
        <h1 className={styling.dataname}>
          {" "}
          <p> ID: {item.id} </p> <p>{item.name}</p>
        </h1>
        <ul className={styling.datalist}>
          <li className={styling.datachar}>
            Type: <p className={styling.answer}>{item.types[0].type.name}</p>
          </li>
          <li className={styling.datachar}>
            {" "}
            Height: <p className={styling.answer}>{item.height}</p>
          </li>
          <li className={styling.datachar}>
            {" "}
            Weight: <p className={styling.answer}>{item.weight}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}