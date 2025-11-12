import { useState } from 'react'
import styles from "./boton.module.css";

const Boton = () => {
    const [contador, setContador] = useState(0); 

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    const restablecer = () => {
        setContador(0);
    }

    return (
        <div className={styles["card"]}>
            <h1>Contador</h1>
            <div className={styles["contador"]}>
                <h2>{contador}</h2>
            </div>
            < br/>
            <div className={styles["GrupoBoton"]}>
                <button className={styles["boton","incrementar"]} onClick={incrementar}>Aumentar</button>
                <button className={styles["boton","disminuir"]} onClick={decrementar}>Disminuir</button>
                <button className={styles["boton","restablecer"]} onClick={restablecer}>Restablecer</button>
            </div>

            
        </div>
    )
}

export default Boton;