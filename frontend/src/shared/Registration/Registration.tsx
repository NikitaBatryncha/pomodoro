import React, { useEffect, useState } from 'react';
import styles from './registration.css';
import { Input } from '../Input';
import { registration } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';

export function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(registration(name, surname, email, password)  as any);
  }, [])

  const handleRegistration = async (name: string, surname: string, email: string, password: string) => {
    try {
      const res: any  = await dispatch(registration(name, surname, email, password)  as any);
      if (res.success) {
        setError(null)
        setMessage(res.message);
      } else {
        setError(res.message);
        setMessage(null);
      }
    } catch (e) {
      console.log('Ошибка в обработке результата регистрации:', e);
    }
  };

  return (
    <div className={styles.Registration}>
      <div className={styles.RegistrationWrapper}>
        <h2 className={styles.RegistrationTitle}>Регистрация</h2>
        <Input type={'test'} setValue={setName} placeholder={'Имя'}/>
        <Input type={'test'} setValue={setSurname} placeholder={'Фамилия'}/>
        <Input type={'email'} setValue={setEmail} placeholder={'Email'}/>
        <Input type={'password'} setValue={setPassword} placeholder={'Пароль'}/>
        {error ? <div className={styles.RegistrationError}>{error}</div> : <div className={styles.RegistrationMessage}>{message}</div>}
        <button onClick={() => handleRegistration(name, surname, email, password)} className={styles.RegistrationBtn}>Зарегистрироваться</button>
      </div>
    </div>
  );
}

