import { useCronometroStore } from "../../../../store";
import styles from "./styles.module.css";
export default function BotaoModo({ children, modoBotao }) {
  const modoCronometro = useCronometroStore((estado) => estado.modoCronometro);
  const setModoCronometro = useCronometroStore((estado) => estado.setModoCronometro);

  const botaoAtivo = modoBotao.id === modoCronometro.id;

  const aoClicar = () => {
    setModoCronometro(modoBotao);
  };

  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${botaoAtivo ? styles["cronometer-modes__button--active"] : ""}
      `}
      onClick={aoClicar}
    >
      {children}
    </button>
  );
}
