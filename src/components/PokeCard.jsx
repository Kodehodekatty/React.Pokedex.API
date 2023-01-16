import styles from "./styles.module.css";

const PokeCard = ({ item }) => {
  return (
    <div className={styles.box}>
      <img
        src={item.sprites.front_default}
        alt=""
        className={styles.spriteImages}
      />
      <h3 className={styles.idTag}># {item.id}</h3>
      <h1>{item.name}</h1>

      <p>{item.types[0].type.name}</p>
    </div>
  );
};

export default PokeCard;
