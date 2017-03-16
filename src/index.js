import React from 'react';
import ReactDOM from 'react-dom';
import GalleryApp from './components/GalleryApp/GalleryApp';
import './index.css';


ReactDOM.render(
  <div id='root'>
    < h1 > Welcome to the Gallery</h1 >
    <GalleryApp />
  </div >,
  document.getElementById('root')
);