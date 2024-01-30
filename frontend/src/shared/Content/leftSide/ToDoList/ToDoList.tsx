import React, { useEffect, useState } from 'react';
import styles from './todolist.css';
import { ToDoTitle } from './ToDoTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../../../actions/file';

export function ToDoList() {
  const dispatch = useDispatch();
  const currentDir = useSelector((state: any) => state.files.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir) as any);
  }, [currentDir]);

  const items = useSelector((state: any) => state.files.files);

  return (
    <div className={styles.ToDoListContainer}>
      <ul className={styles.ToDoList}>
        {items.map((a: any, index: string) => (
          <ToDoTitle key={index} id={index} title={a.name} />
        ))}
      </ul>
      <div className={styles.TimeSummary}>
        1 час 15 минут
      </div>
    </div>
  );
}
