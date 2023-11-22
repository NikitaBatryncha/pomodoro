import React from 'react';
import styles from './infolist.css';

export function InfoList() {
  return (
    <div className={styles.ToDoList}>
      <h2 className={styles.ContentTitle}>
         Ура! Теперь можно начать работать:
      </h2>
      <ul className={styles.ContentList}>
        <li className={styles.ContentListItem}>
          <div className={styles.ListItemDist}></div>
          Выберите категорию и напишите название текущей задачи
        </li>
        <li className={styles.ContentListItem}>
          <div className={styles.ListItemDist}></div>
          Запустите таймер («помидор»)
        </li>
        <li className={styles.ContentListItem}>
          <div className={styles.ListItemDist}></div>
          Работайте пока «помидор» не прозвонит
        </li>
        <li className={styles.ContentListItem}>
          <div className={styles.ListItemDist}></div>
          Сделайте короткий перерыв (3-5 минут)
        </li>
        <li className={styles.ContentListItem}>
          <div className={styles.ListItemDist}></div>
          Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
        </li>
      </ul>
    </div>
  );
}
