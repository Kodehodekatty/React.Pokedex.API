import styles from "./styles.module.css";
import styling from "./DetailView.module.css";
import { useState } from "react";
import React from "react";

const PokeCard = ({ item, show, setShow }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.card}>
          <p className={styles.number}>{item.id}</p>
          <img
            src={item.sprites.front_default}
            alt=""
            className={styles.spriteImages}
            onClick={() => setShow(show == item.id ? 0 : item.id)}
          />
        </div>
      </div>{" "}
      {show == item.id && (
        <section className={styling.closerview}>
          {" "}
          <div className={styling.datawrapper}>
            {" "}
            <img
              src={item.sprites.front_default}
              alt=""
              className={styles.spritebigImage}
            />
            <h3 className={styles.idTag}># {item.id}</h3>
            <h1>{item.name}</h1>
            <p>{item.types[0].type.name}</p>{" "}
          </div>
        </section>
      )}
    </div>
  );
};

export default PokeCard;
