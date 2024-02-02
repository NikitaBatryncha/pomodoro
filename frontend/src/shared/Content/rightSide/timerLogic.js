import { useEffect, useState } from "react";
import { useNow } from "../../../hooks/useNow";

export function useTimerLogic(initialMinutes, initialPauseMinutes) {
  const [startAt, setStartAt] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timerToggleValue, setTimerToggleValue] = useState('work');
  const [initialTimer, setInitialTimer] = useState(0)
  const initialTime = timerToggleValue === 'work' ? initialMinutes : initialPauseMinutes;

  const now = useNow(1000, startAt);

  const fromStart = now - (startAt ?? now);
  const timer = fromStart + initialTimer;
  const countDown = Number(initialTime - timer);

  const toggleTimer = () => {
    if (startAt) {
      setIsActive(!startAt);
      setInitialTimer(timer)
      setStartAt();
      setIsCompleted(false);
    } else {
      setStartAt(Date.now())
    }
  }

  const formatTime = (time) => {
    if (time < 0) {
      return "00:00";
    } else if (typeof time !== 'number' || isNaN(time)) {
      return countDown
    }

    const minutes = Math.floor(time / 60);
    const remainingMilliseconds = time % 60;
    return `${minutes < 10 ? `0${minutes}`: minutes}:${remainingMilliseconds < 10 ? '0' : ''}${remainingMilliseconds}`;
  };

  const isCountEnd = countDown === 0;

  useEffect(() => {
    if (isCountEnd) {
      console.log('count down')
    }
  }, [isCountEnd])

  function plusMinutes() {
    if (!isActive) {
      setStartAt((prevStartAt) => {
        const newStartAt = prevStartAt ?? Date.now();
        const newTime = newStartAt + 60000;
        return newTime;
      });
    }
  }

  const handlePlusMinutesClick = () => {
    plusMinutes();
  }

  return {
    formatTime,
    countDown,
    handlePlusMinutesClick,
    toggleTimer,
    isActive
  };
}
