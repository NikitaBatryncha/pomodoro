import React from 'react';
import styles from './content.css';
import { InfoList} from './leftSide/InfoList';
import { ToDoForm } from './leftSide/ToDoForm';
import { ToDoList } from './leftSide/ToDoList';
import { Timer } from './rightSide/Timer';
import { ToDoContainer } from './rightSide/ToDoContainer'
import { NavLink } from 'react-router-dom';

export function Content() {
  return (
      <div className={styles.MainContainer}>
        <div className={styles.ContentContainer}>
          <div className={styles.LeftContainer}>
            <InfoList />
            <ToDoForm />
            <ToDoList />
          </div>
          <div className={styles.RightContainer}>
            <ToDoContainer />
            <Timer />
          </div>
        </div>
      </div>
  );
}
