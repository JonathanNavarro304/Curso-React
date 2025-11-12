import styles from "./Card.module.css";

const Card = ({ categoria, producto, precio, imagen }) => {
  return (
    <div className={styles["card"]}>
      <img src={imagen} alt={categoria} className={styles["imagen"]} />
      <h2 className={styles["tipografia"]}>{categoria}</h2>
      <h2 className={styles["h2"]}>{producto}</h2>

      <h3 className={styles["h2"]}>{precio}</h3>
      <button className={styles["comprar"]}>Comprar</button>

      <br />
      <br />
    </div>
  );
};

export default Card;
