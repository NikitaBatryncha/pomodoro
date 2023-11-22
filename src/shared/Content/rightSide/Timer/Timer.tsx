import React, { useEffect, useState } from 'react';
import styles from './timer.css';
import { ToDoTask } from '../ToDoContainer/ToDoTask';

export function Timer() {
  const [initialMinutes, setInitialMinutes] = useState(0.25);
  const [initialWorkTime, setInitialWorkTime] = useState(initialMinutes * 60);
  const [initialPauseTime, setInitialPauseTime] = useState(0.25 * 60);
  const [seconds, setSeconds] = useState(initialWorkTime);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timerToggle, setTimerToggle] = useState('work');

  useEffect(() => {
    setInitialWorkTime(initialMinutes * 60);
    setSeconds(initialMinutes * 60);
  }, [initialMinutes]);

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isActive]);

  useEffect(() => {
    if (seconds === 0 && timerToggle === 'work') {
      setIsActive(false);
      setIsCompleted(true);

      setTimeout(() => {
        setTimerToggle('pause');
        setSeconds(initialPauseTime);
        setIsCompleted(false);
        setIsActive(true);
      }, 3000)
    } else if (seconds === 0 && timerToggle === 'pause') {
      setIsActive(false);
      setTimeout(() => {
      setIsCompleted(true);
        setTimeout(() => {
          setTimerToggle('work');
          setSeconds(initialWorkTime);
          setIsCompleted(false);
          setIsActive(true);
        }, 3000)
      }, 4000)
    }
  }, [seconds, timerToggle, initialPauseTime, initialWorkTime]);

  function plusMinutes() {
    requestAnimationFrame(() => {
      setInitialMinutes((prevMinutes) => prevMinutes + 1);
      const newInitialMinutes = initialMinutes + 1;
      setInitialWorkTime(newInitialMinutes * 60);
      setSeconds(newInitialMinutes * 60);
    });
  }

  function handlePlusMinutesClick() {
    plusMinutes();
  }

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsCompleted(false);
    setSeconds(initialWorkTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className={styles.Timer}>
      <div className={styles.TimerCountContainer}>
        <div className={styles.TimerCount}>
          {formatTime(seconds)}
          <button className={styles.TimerButton} onClick={handlePlusMinutesClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#C4C4C4"/>
              <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white"/>
            </svg>
          </button>
          <div className={styles.TaskWrapper}>
            <span className={styles.TaskNumber}>
              Задача 1 -
            </span>
            <ToDoTask />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.StartButton} onClick={toggleTimer}>
            {isActive ? 'Пауза' : 'Старт'}
          </button>
          <button className={styles.StopButton} onClick={resetTimer}>
            Стоп
          </button>
        </div>
      </div>
    </div>
  );
}
