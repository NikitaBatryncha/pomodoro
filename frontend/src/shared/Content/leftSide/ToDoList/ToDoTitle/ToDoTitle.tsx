import React from 'react';
import styles from './todotitle.css';
import { useDispatch } from 'react-redux';
import { setButtonValue } from '../../../../../reducers/buttonReducer';

interface ToDoTitleProps {
  id: string,
  title: string
}

export function ToDoTitle({ title, id }: ToDoTitleProps) {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setButtonValue(title, id));
  };

  return (
    <li className={styles.TitleContainer}>
      <h2 className={styles.Title}>
        <button className={styles.TitleBtn} id={id} onClick={handleButtonClick}>
          {title}
        </button>
      </h2>
    </li>
  );
}
