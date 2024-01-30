import React, { InputHTMLAttributes } from 'react';
import styles from './input.css';

interface InProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: (value: string) => void;
}

export function Input(props: InProps) {
  return (
    <input
      className={styles.Input}
      onChange={(e) => props.setValue(e.target.value)}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
