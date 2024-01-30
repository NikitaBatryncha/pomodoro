import axios from 'axios'
import {setUser, signUp} from "../reducers/userReducer";

export const registration = (name, surname, email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
        name,
        surname,
        email,
        password
      });
      dispatch(signUp(true));
      return { success: true, message: response.data.message };
    } catch (e) {
      return { success: false, message: e.response.data.message };
    }
  };
};

export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password
      });
      if (response.status === 200) {
        dispatch(setUser(response.data.user));
        localStorage.setItem('token', response.data.token);
        return { success: true, message: 'Вход выполнен успешно' };
      } else {
        const error = response.statusText;
        return { success: false, message: error };
      }
    } catch (e) {
      return { success: false, message: e.response.data.message };
    }
  };
};

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
