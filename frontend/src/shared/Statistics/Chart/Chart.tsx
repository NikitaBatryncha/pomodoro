import React from 'react';
import styles from './chart.css';
import { Legend } from './Legend';
import { AxisX } from './AxisX';
import { useData } from '../../../context/dataContext';


interface IValue {
  id: number,
  time: number,
  day: string,
}

export function Chart() {

  return (
    <div className={styles.Chart}>
      <Legend />
      <AxisX />
    </div>
  );
}
