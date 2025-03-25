import { useCronometroStore } from "../../../store";
import styles from "./styles.module.css";
import pauseImg from "/src/assets/imgs/pause.png";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import audioPauseSom from "/src/assets/sons/pause.mp3";
import audioPlaySom from "/src/assets/sons/play.wav";

export default function BotaoCronometro() {
  const intervaloId = useCronometroStore((estado) => estado.intervaloId);
  const iniciarCronometro = useCronometroStore((estado) => estado.iniciarCronometro);
  const pausarCronometro = useCronometroStore((estado) => estado.pausarCronometro);

  const textoIniciarOuPausar = intervaloId ? "Pausar" : "Começar";
  const iconeIniciarOuPausar = intervaloId ? pauseImg : play_arrowImg;

  const audioPlay = new Audio(audioPlaySom);
  const audioPause = new Audio(audioPauseSom);

  const iniciarOuPausar = () => {
    if (!intervaloId) {
      iniciarCronometro();
      audioPlay.play();
    } else {
      pausarCronometro();
      audioPause.play();
    }
  };

  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]} onClick={iniciarOuPausar}>
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
