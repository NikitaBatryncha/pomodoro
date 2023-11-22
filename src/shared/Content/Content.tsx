import React from 'react';
import styles from './content.css';
import { InfoList} from './leftSide/InfoList';
import { ToDoForm } from './leftSide/ToDoForm';
import { ToDoList } from './leftSide/ToDoList';
import { Timer } from './rightSide/Timer';
import { ToDoContainer } from './rightSide/ToDoContainer'

interface HeaderProps {
  ContainerStyle: string
}

export function Content({ContainerStyle}: HeaderProps) {
  return (
    <div className="MainContainer">
      <div className={styles.ContentContainer}>
        <div className={styles.LeftContainer}>
          <InfoList/>
          <ToDoForm/>
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
