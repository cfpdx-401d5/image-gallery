import React from 'react';
import ReactDOM from 'react-dom';
import resources from './resources';
import './index.css';
import App from './App';

ReactDOM.render(
  <App resources={resources}/>,
  document.getElementById('root')
);