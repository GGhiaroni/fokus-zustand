import { useCronometroStore } from "../../../store";
import styles from "./styles.module.css";
import pauseImg from "/src/assets/imgs/pause.png";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";

export default function BotaoCronometro() {
  const intervaloId = useCronometroStore((estado) => estado.intervaloId);
  const iniciarCronometro = useCronometroStore((estado) => estado.iniciarCronometro);

  const textoIniciarOuPausar = intervaloId ? "Pausar" : "Começar";
  const iconeIniciarOuPausar = intervaloId ? pauseImg : play_arrowImg;

  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]} onClick={iniciarCronometro}>
        <img
          className={styles["cronometer__primary-button-icon"]}
          src={iconeIniciarOuPausar}
          alt=""
        />
        <span>{textoIniciarOuPausar}</span>
      </button>
    </div>
  );
}
