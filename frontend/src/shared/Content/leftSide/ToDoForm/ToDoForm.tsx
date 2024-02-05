import React, { useEffect, useRef } from 'react';
// import { Formik, Form, Field } from 'formik';
import styles from './todoform.css';
import { useDispatch, useSelector } from 'react-redux';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { createDir } from '../../../../actions/file';

export class FormModel {
  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  updateValue(newValue: string) {
    this.value = newValue;
  }
}

class Store {
  item = {
    value: String,
  };
}

export const myStore = new FormModel();

export const ToDoForm = observer(() => {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const currentDir = useSelector((state: any) => state.files.currentDir);

  function createHandler(dir: string, name: string) {
    dispatch(createDir(dir, name));
  }

  return (
    <div ref={ref}>
      {/* <Formik
        initialValues={{
          text: myStore.value,
        }}
        onSubmit={async (values) => {
          myStore.updateValue(values.text);
          createHandler(currentDir, myStore.value);
        }}
      >
        <Form className={styles.Form} placeholder="Enter a task description">
        <Field
          as='textarea'
          name='text'
          className={styles.FormInput}
        />
          <button type='submit' className={styles.FormSubmit}>
            Добавить
          </button>
        </Form>
      </Formik> */}
    </div>
  );
});
