import React from 'react';
import styles from './axisX.css';
import { Bar } from '../Bar';
import { useData } from '../../../../context/dataContext';

export function AxisX() {
  const { userData } = useData();
  console.log(userData);
  return (
    <div className={styles.axisX}>
      {userData.map((dayValue: any, index: number) =>
        <Bar
          key={index}
          day={dayValue.day}
        />
      )}
    </div>
  );
}
