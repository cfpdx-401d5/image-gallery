import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'list',
    };
  }

  //logic

  render() {
    return (
      <div><Thumbnail /></div>
    );
  }
}

function List(props) {
  return (
    <ul>
      <li>stuff1</li>
      <li>stuff2</li>
    </ul>
  );
}

function Thumbnail(props) {
  return (
    <img alt='image is here' />
  );
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
