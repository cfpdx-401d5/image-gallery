import React from 'react';
import ReactDOM from 'react-dom';
import puppies from './schnoodle'
import App from './app';
import './index.css';

ReactDOM.render(
  <App puppies={puppies}/>,
  document.getElementById('root')
);