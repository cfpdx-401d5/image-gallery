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
      <div><List/></div>
    );
  }
}

function List(props){
  return (
    <ul>
      <li>stuff1</li>
      <li>stuff2</li>
    </ul>
  );
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
