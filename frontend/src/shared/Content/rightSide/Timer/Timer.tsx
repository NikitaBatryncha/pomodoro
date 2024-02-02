import React, { useEffect, useState } from 'react';
import styles from './timer.css';
import { ToDoTask } from '../ToDoContainer/ToDoTask';
import { useSelector } from 'react-redux';
import { useTimerLogic } from '../timerLogic';

export function Timer() {
  const initialMinutes = 15000;
  const initialPauseMinutes = 5000;
  const buttonData = useSelector((state: any) => state.data);
  const [id, setId] = useState('');

  useEffect(() => {
    setId(buttonData.id)
  }, [buttonData])

  const {
    formatTime,
    countDown,
    handlePlusMinutesClick,
    toggleTimer,
    isActive
  } = useTimerLogic(initialMinutes, initialPauseMinutes);

  return (
    <div className={styles.Timer}>
      <div className={styles.TimerCountContainer}>
        <div className={styles.TimerCount}>
          {isNaN(countDown) ? "00:00":formatTime(Math.ceil(countDown / 1000))}
          <button className={styles.TimerButton} onClick={handlePlusMinutesClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#C4C4C4"/>
              <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white"/>
            </svg>
          </button>
          <div className={styles.TaskWrapper}>
            <span className={styles.TaskNumber}>
              Задача {Number(id) + 1} -
            </span>
            <ToDoTask />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.StartButton} onClick={toggleTimer}>
            {!isActive ? 'Старт' : 'Пауза'}
          </button>
          {/* <button className={styles.StopButton} onClick={stopTimer}>
            Стоп
          </button> */}
        </div>
      </div>
    </div>
  );
}
