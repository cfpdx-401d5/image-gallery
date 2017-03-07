import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'list',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  //logic
  clickHandler(e){
    e.preventDefault();

    alert('i was clicked');
  }

  render() {
    return (
      <div><Selector clickHandler={this.clickHandler}/></div>
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

function Selector(props) {
  return (
    <div>
      <button onClick={props.clickHandler}>List</button>
      <button onClick={props.clickHandler}>Thumbnail</button>
    </div>
  );
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
