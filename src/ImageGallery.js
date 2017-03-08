import React, { Component } from 'react';

import images from './images.js';

function ListView(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <p> Description: {props.image.description} </p>
      <p> Link: {props.image.url} </p>
    </div>
  );
}

// max 100x100 thumbnail image
function ThumbnailView(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <img className='thumbnail' src={props.image.url} alt='cute bunny'/>
    </div>
  );
}

// scaled large image
function GalleryView(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <p> Description: {props.image.description} </p>
      <img className='gallery' src={props.image.url} alt='cute bunny'/>
    </div>
  );
}

function ImageSelectorBar(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler('list')}> List View </button>
      <button onClick={() => props.clickHandler('thumbnail')}> Thumbnail View </button>
      <button onClick={() => props.clickHandler('gallery')}> Gallery View </button>
    </div>
  ); 
}

// establishes default state
export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'list',
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.images = images;
  }

  clickHandler(newView) {
    this.setState({
      currentView: newView
    });
  }

  render() {
    let contents;
    
    if (this.state.currentView === 'thumbnail') {
      contents = < ThumbnailView images={this.images} />;
    }
    else if (this.state.currentView === 'gallery') {
      contents = < GalleryView images={this.images} />;
    }
    else {
      contents = < ListView images={this.images} />;
    }
    return (
      <div>
        <ImageSelectorBar
          clickHandler={this.clickHandler}
        />
        {contents}
      </div>
    );
  }

}
