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

  clickHandler(whatView) {
    this.setState({ viewType: whatView });
  }

  render() {
    return (
        <div>
          <Selector clickHandler={this.clickHandler} />
          <ImageViewer type={this.state.viewType} />
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

function ImageViewer(props) {
  if (props.type === 'list') return <List/>;
  else if (props.type === 'thumbnail') return <Thumbnail />;
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
