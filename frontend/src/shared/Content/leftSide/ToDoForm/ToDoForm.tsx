import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './todoform.css';
import {useDispatch, useSelector} from 'react-redux'
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { createDir, getFiles } from '../../../../actions/file';

export class form {
  value = '';

  constructor() {
    makeAutoObservable(this)
  }

  updateValue(newValue: string) {
    this.value = newValue;
  }
}

class store {
  item = {
    value: String
  }
}

export const myStore = new form;

export const ToDoForm = observer(() => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null);
  const currentDir = useSelector((state:any) => state.files.currentDir)


  function createHandler(dir: string, name: string) {
    dispatch(createDir(dir, name) as any);
  }

  return (
    <div ref={ref}>
      <Formik
        initialValues={{
          text: myStore.value
        }}
        onSubmit={async (values) => {
          myStore.updateValue(values.text);
          createHandler(currentDir, myStore.value)
        }}
      >
        <Form className={styles.Form}>
          <Field
            as='textarea'
            name='text'
            className={styles.FormInput}
            placeholder={"Название задачи"}
          />
          <button type="submit" className={styles.FormSubmit}>
            Добавить
          </button>
        </Form>
      </Formik>
    </div>
  );
})
