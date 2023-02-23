import styles from "./styles.module.css";
import { useState } from "react";
import React from "react";

const PokeCard = ({ item }) => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.card}>
          <h3 className={styles.idTag}># {item.id}</h3>
          <img
            src={item.sprites.front_default}
            alt=""
            className={styles.spriteImages}
          />{" "}
          {/* <h3 className={styles.idTag}># {item.id}</h3>
          <h1>{item.name}</h1>
          <p>{item.types[0].type.name}</p>{" "} */}
        </div>
        {/* <button onClick={toggle}>click for more info</button> */}
      </div>
    </div>
  );
};

export default PokeCard;
