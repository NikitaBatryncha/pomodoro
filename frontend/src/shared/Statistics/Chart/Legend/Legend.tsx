import React from 'react';
import styles from './legend.css';
import { ChartBar } from '../ChartBar';
import { useData } from '../../../../context/dataContext';

export function Legend() {
  const { userData } = useData();
  console.log(userData);
  
  return (
    <div className={styles.Legend}>
      {userData.map((heightValue: any, index: any) =>
        <ChartBar
          key={index}
          height={heightValue.time}
        />
      )}
    </div>
  );
}
