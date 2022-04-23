import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import reducer from "./components/redux/reducer";
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
