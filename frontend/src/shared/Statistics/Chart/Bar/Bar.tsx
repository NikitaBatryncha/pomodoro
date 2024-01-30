import React from 'react';
import styles from './bar.css';

interface BarProps  {
  day: string
}

export function Bar({ day }: BarProps) {
  return (
    <div className={styles.BarWrapper}>
      {day}
    </div>
  );
}
