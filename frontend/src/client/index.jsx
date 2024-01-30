import * as React from 'react'
import * as ReactDom from 'react-dom'
import { App } from '../shared/App';
import { Provider } from 'react-redux';
import { store } from '../reducers'
import reportWebVitals from "../reportWebVitals";

window.addEventListener('load', () => {
  ReactDom.hydrate(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById("react_root"));
})

reportWebVitals();
