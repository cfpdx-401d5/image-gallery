import React, { Component } from 'react';
import babyBunBuns from '../data/bunnyimages';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';


function Selector(props) {
  return (
    <div>
      <button onClick={() => props.handleClick('thumbnail')}>Thumbnail View</button>
      <button onClick={() => props.handleClick('list')}>List View</button>
      <button onClick={() => props.handleClick('gallery')}>Gallery View</button>
    </div>
  )
}

Selector.propTypes = {
  
}

function View(props) {
  if (props.viewStyle === 'thumbnail') {
    return (
      <Thumbnail images={props.babyBunBuns}/>
    )
  }
  else if (props.viewStyle === 'list') {
    return (
      <List images={props.babyBunBuns}/>
    )
  }
  else if (props.viewStyle === 'gallery') {
    return (
      <Gallery images={props.babyBunBuns}/>
    )
  }
  else {
    return (
      <p>Click a Button to Get Started</p>
    )
  }
}

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewStyle: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.babyBunBuns = babyBunBuns;
  }

  handleClick(viewValue) {
    console.log(viewValue);
    this.setState({
      viewStyle: viewValue
    });
  }

  render() {
    return (
      <div>
        <Selector handleClick={this.handleClick}/>
        <View babyBunBuns={this.babyBunBuns} viewStyle={this.state.viewStyle}/>
      </div>
    );
  }
}
