import React, { Component } from 'react';

// import images from './images.js';

export function ListView(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <p> Description: {props.image.description} </p>
      <p> Url: {props.image.url} </p>
    </div>
  );
}

// max 100x100 thumbnail image
export function ThumbnailView(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <img className='thumbnail' src={props.image.url} alt='cute bunny'/>
    </div>
  );
}

// scaled large image
export function GalleryView(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <p> Description: {props.image.description} </p>
      <img className='gallery' src={props.image.url} alt='cute bunny'/>
    </div>
  );
}

export function ImageSelectorBar(props) {
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
      image: {
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      }
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(newView) {
    this.setState({
      currentView: newView
    });
  }

  render() {
    let contents;
    if (this.state.currentView === 'thumbnail') {
      contents = < ThumbnailView image={this.state.image} />;
    }
    else if (this.state.currentView === 'gallery') {
      contents = < GalleryView image={this.state.image} />;
    }
    else {
      contents = < ListView image={this.state.image} />;
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
