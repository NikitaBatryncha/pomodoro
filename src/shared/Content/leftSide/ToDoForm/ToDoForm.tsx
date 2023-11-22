import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './todoform.css';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

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
  const ref = useRef<HTMLDivElement>(null)
  async function createData() {
    try {
      const response = await fetch('http://localhost:3003/api/storage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: myStore.value
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      await response.json();
    } catch (error) {
      console.error('Error creating data:', error);
    }
  }
  return (
    <div ref={ref}>
      <Formik
        initialValues={{
          text: myStore.value
        }}
        onSubmit={async (values) => {
          myStore.updateValue(values.text);
          await createData()
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
