import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import buttonReducer from "./buttonReducer";

const rootReducer = {
  user: userReducer,
  files: fileReducer,
  data: buttonReducer
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

