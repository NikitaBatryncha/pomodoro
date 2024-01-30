import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import buttonReducer from "./buttonReducer";

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
  data: buttonReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
