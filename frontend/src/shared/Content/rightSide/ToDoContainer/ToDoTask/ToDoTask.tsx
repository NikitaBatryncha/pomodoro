import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import styles from './todotask.css';
import { myStore } from '../../../leftSide/ToDoForm';
import { useSelector } from 'react-redux';

export const ToDoTask = observer(() => {
  const [title, setTitle] = useState('');
  const buttonValue = useSelector((state: any) => state.data.buttonValue);

  useEffect(() => {
    setTitle(buttonValue);
  }, [buttonValue, myStore.value]);

  return (
    <div className={styles.ToDoTask}>
      {title || myStore.value}
    </div>
  );
});
