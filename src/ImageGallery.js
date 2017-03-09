import React, { Component } from 'react';

// import images from './images';

const images = [
  {
    id: 1,
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'   
  },
  {
    id: 2,
    title: 'Snow Flake',
    description: 'White Rabbit',
    url: 'http://im5.leaderhero.com/wallpaper/20140328/12835c9a-f.jpg'
  },
];

import DetailList from './DetailList';
import GalleryList from './GalleryList';
import ThumbnailList from './ThumbnailList';

import DetailDisplay from './DetailDisplay';
import GalleryDisplay from './GalleryDisplay';
import ThumbnailDisplay from './ThumbnailDisplay';

function ImageSelectorBar(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler('detail')}> List View </button>
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
      currentView: 'detail',
      images: images,
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
      contents = < ThumbnailList images={this.state.images} />;
    }
    else if (this.state.currentView === 'gallery') {
      contents = < GalleryList images={this.state.images} />;
    }
    else {
      contents = < DetailList images={this.state.images} />;
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