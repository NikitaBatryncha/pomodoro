import React, { useState } from 'react';
import styles from './todocontainer.css';
import { ToDoTask } from './ToDoTask';

export function ToDoContainer() {
  return (
    <div className={styles.ToDoContainer}>
      <div className={styles.ToDoTaskWrapper}>
        <ToDoTask />
        <span className={styles.PomodoroNumber}>
          Помидор 1
        </span>
      </div>
    </div>
  );
}
