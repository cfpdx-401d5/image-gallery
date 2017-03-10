import React from 'react';
import ReactDOM from 'react-dom';
import resources from './data/resources';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <App resources={resources}/>,
  document.getElementById('root')
);
