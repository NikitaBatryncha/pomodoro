import React from 'react';
import styles from './chartbar.css';

interface ChartBarProps {
  height: number
}

export function ChartBar({height}: ChartBarProps) {
  const calculatedHeight: number = (height * (83 / 25));
  return (
    <div className={styles.ChartBar} style={{ height: `${calculatedHeight}px` }}>

    </div>
  );
}
