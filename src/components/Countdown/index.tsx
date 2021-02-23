import React, { useState, useEffect } from "react";
import styles from "../../styles/components/Countdown.module.css";

const Countdown: React.FC = () => {
  // 25 minutos representado em segundos.
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  // arredondando minutos para evitar numeros quebrados
  const seconds = time % 60;
  // resto da divicao

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  let timeout;

  useEffect(() => {
    if (active && time > 0) {
      timeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  function startCountdown() {
    return setActive(true);
  }

  function resetCountdown() {
    clearTimeout(timeout);
    setActive(false);
    return setTime(25 * 60);
  }

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {active ? (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={resetCountdown}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
        </button>
      )}
    </div>
  );
};

export default Countdown;
