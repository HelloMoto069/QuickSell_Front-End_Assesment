import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DisplayBlock from './components/DisplayBlock';
import Hightlight from './components/Highlight';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DisplayBlock />
  </React.StrictMode>,
  document.getElementById('root')
);
