import React from 'react';
import { observer } from 'mobx-react';
import styles from './todotask.css';
import { myStore } from '../../../leftSide/ToDoForm';

export const ToDoTask = observer(() => {
  return (
    <div className={styles.ToDoTask}>
      {myStore.value}
    </div>
  );
});
