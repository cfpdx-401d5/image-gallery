import React from 'react';
import ReactDOM from 'react-dom';

import ImageGallery from './ImageGallery';

import './index.css';

const makeMeCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100vh',
};

let app = <ImageGallery/>;

ReactDOM.render(
  <div style={makeMeCentered}>
    {app}
  </div>,
  document.getElementById('root')
);
