import React, { useEffect, useState } from 'react';
import styles from './login.css';
import { Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import { store } from '../../reducers';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user.currentUser);


  const errorTranslator = (a: string) => {
    if (a === 'User not found') {
      return a = 'Пользователь с таким email не найден'
    } else if (a === 'Invalid password') {
      return a = 'Неверный пароль'
    } else {
      return a = 'Неизвестная ошибка. Попробуйте еще раз'
    }
  }

  useEffect(() => {
    dispatch(login(email, password) as any);
  }, [])

  const handleLogin = async () => {
    try {
      const data: any = await dispatch(login(email, password)  as any);
      if (data.success) {
        setError('');
        setMessage(data.message);
      } else {
        const error = errorTranslator(data.message);
        setError(error);
        setMessage(null);
      }
    } catch (error) {
      console.error('Произошла ошибка при входе в систему:', error);
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.LoginWrapper}>
        <h2 className={styles.LoginTitle}>Вход</h2>
          <Input type={'email'} setValue={setEmail} placeholder={'Email'}/>
          <Input type={'password'} setValue={setPassword} placeholder={'Пароль'}/>
          {error ? <div className={styles.LoginError}>{error}</div> : <div className={styles.LoginMessage}>{message}</div>}
        <button className={styles.LoginBtn} onClick={() => handleLogin()}>Войти</button>
      </div>
    </div>
  );
}
