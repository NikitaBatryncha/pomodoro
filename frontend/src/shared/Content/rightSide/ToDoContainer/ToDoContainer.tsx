import React, { useState } from 'react';
import styles from './todocontainer.css';
import { ToDoTask } from './ToDoTask';
import { PomNum } from './PomNum';

export function ToDoContainer() {
  return (
    <div className={styles.ToDoContainer}>
      <div className={styles.ToDoTaskWrapper}>
        <ToDoTask />
        <PomNum/>
      </div>
    </div>
  );
}
