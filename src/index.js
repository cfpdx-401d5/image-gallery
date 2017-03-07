import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'list',
      image: {
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      },
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(whatView) {
    this.setState({ viewType: whatView });
  }

  render() {
    let displayType;

    if (this.state.viewType === 'list') displayType = <List image={this.state.image}/>;
    else if (this.state.viewType === 'thumbnail') displayType = <Thumbnail image={this.state.image}/>;
    else if (this.state.viewType === 'gallery') displayType = <Gallery image={this.state.image}/>;

    return (
        <div>
          <Selector clickHandler={this.clickHandler} />
          {displayType}
        </div>
    );
  }
}

function List(props) {
  return (
    <ul>
      <li><a href={props.image.url}>{props.image.title}</a>: {props.image.description}
      </li>
    </ul>
  );
}

function Thumbnail(props) {
  return (
    <div>
      <img className='thumbnail' src={props.image.url} alt='cute bunny thumbnail' />
      <p>{props.image.title}</p>
    </div>
  );
}

function Gallery(props) {
  return (
    <div>
      <img src={props.image.url} alt='cute bunny gallery view' />
      <p>
        {props.image.title} <br/>
        {props.image.description}
      </p>
    </div>
  );
}

function Selector(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.clickHandler('list');
        }}
      >
        List
      </button>

      <button 
        onClick={() => {
          props.clickHandler('thumbnail');
        }}
      >
        Thumbnail
      </button>

      <button
        onClick={() => {
          props.clickHandler('gallery');
        }}
      >
        Gallery
      </button>
    </div>
  );
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
