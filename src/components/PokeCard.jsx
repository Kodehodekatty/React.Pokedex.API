import styles from "./styles.module.css";
import styling from "./DetailView.module.css";
import { useState } from "react";
import React from "react";

const PokeCard = ({ item, onClickHandler }) => {
  return (
    <div className={styles.box} onClick={onClickHandler}>
      <div className={styles.card}>
        <p className={styles.number}>{item.id}</p>
        <img
          src={item.sprites.front_default}
          alt=""
          className={styles.spriteImages}
          onClick={() => setShow(show == item.id ? 0 : item.id)}
        />
      </div>
    </div>
  );
};

export default PokeCard;
