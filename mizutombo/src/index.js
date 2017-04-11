import React from 'react';
import ReactDOM from 'react-dom';

import ImageGallery from './ImageGallery';

import './index.css';

let app = <ImageGallery/>;

ReactDOM.render(
  <div>
    {app}
  </div>,
  document.getElementById('root')
);
