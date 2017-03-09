import React, { Component } from 'react';

import images from './images';

import DetailList from './DetailList';
import GalleryList from './GalleryList';
import ThumbnailList from './ThumbnailList';

function ImageSelectorBar(props) {
  return (
    <div className='image-select'>
      <button onClick={() => props.clickHandler('detail')}> Detail View </button>
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
