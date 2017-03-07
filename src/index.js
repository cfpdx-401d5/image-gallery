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
  clickHandler(whatView) {

    this.setState({ viewType: whatView });
  }

  render() {
    return (
      <div>
        <p>{this.state.viewType}</p>
        <Selector clickHandler={this.clickHandler} />
      </div>
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
      <button onClick={() => {
        props.clickHandler('list');
      }}
      >
        List
      </button>
      <button onClick={() => {
        props.clickHandler('thumbnail');
      }}
      >
        Thumbnail
      </button>
    </div>
  );
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
