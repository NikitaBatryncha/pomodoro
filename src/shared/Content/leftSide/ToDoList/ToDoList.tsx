import React, { useEffect, useState } from 'react';
import styles from './todolist.css';
import { ToDoTitle } from './ToDoTitle';

export function ToDoList() {
  const [storeArray, setStoreArray] = useState([]);


    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/storage');
        if (response.ok) {
          const result = await response.json();
          setStoreArray(result);
        }
      } catch (error) {
        console.error('Ошибка получения данных');
      }
    }
    loadData();


  // Функция для обновления состояния после сохранения новых задач
  const handleNewTask = async () => {
    try {
      const response = await fetch('http://localhost:3003/api/storage');
      if (response.ok) {
        const result = await response.json();
        setStoreArray(result);
      }
    } catch (error) {
      console.error('Ошибка получения данных');
    }
  };

  return (
    <div className={styles.ToDoListContainer}>
      <ul className={styles.ToDoList}>
        {storeArray.map((a: any, index) => (
          a !== '' ? <ToDoTitle key={index} title={a.name} /> : null
        ))}
      </ul>
      <div className={styles.TimeSummary}>
        1 час 15 минут
      </div>
    </div>
  );
}
