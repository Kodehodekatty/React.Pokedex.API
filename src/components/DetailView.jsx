import React from "react";

import styling from "./DetailView.module.css";

export default function CloserView({ item }) {
  return (
    <section className={styling.closerview}>
      <img src={item.sprites.front_default} className={styling.spriteimage} />

      <div className={styling.datawrapper}>
        <h1 className={styling.dataname}>
          {" "}
          ID: {item.id} {item.name}
        </h1>

        <p className={styling.datachar}>{item.types[0].type.name}</p>
      </div>
    </section>
  );
}
