import React from 'react';
import styles from './todotitle.css';

interface ToDoTitleProps {
  title: string
}

export function ToDoTitle({title}: ToDoTitleProps) {
  return (
    <li className={styles.TitleContainer}>
      <h2 className={styles.Title}>
        {title}
      </h2>
    </li>
  );
}
