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
  {
    id: 3,
    title: 'Floppy Bunny',
    description: 'Can this floppy ear bunny fly?',
    url: 'http://cdn.litlepups.net/2016/04/10/floppy-eared-bunny-365daysofdawn.jpg'
  },
  {
    id: 4,
    title: 'Crash Test Bunny',
    description: 'This bunny is going bye bye for Delete test',
    url: 'http://cdn.litlepups.net/2016/04/10/floppy-eared-bunny-365daysofdawn.jpg'
  }, 
];

import DetailList from './DetailList';
import GalleryList from './GalleryList';
import ThumbnailList from './ThumbnailList';
// import NewImageForm from './NewImageForm';

function ImageSelectorBar(props) {
  return (
    <div className='image-select'>
      <button onClick={() => props.clickHandler('detail')}> Detail View </button>
      <button onClick={() => props.clickHandler('thumbnail')}> Thumbnail View </button>
      <button onClick={() => props.clickHandler('gallery')}> Gallery View </button>
      <button className='add-button' onClick={() => props.clickHandler('form')}> Add New Image </button>
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
    this.deleteImage = this.deleteImage.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  clickHandler(newView) {
    this.setState({
      currentView: newView
    });
  }

  addImage(imageToAdd) {
    let newImages = this.state.images.splice();
    newImages.push(imageToAdd);
    this.setState({
      images: newImages
    });
  }

  deleteImage(imageToDelete) {
    let newImages = this.state.images.filter((image, idx) => {
      if (imageToDelete !== image) {
        return image;
      }
    });
    this.setState({
      images: newImages
    });
  }

  render() {
    let contents;
    
    if (this.state.currentView === 'thumbnail') {
      contents = < ThumbnailList images={this.state.images} deleteImage={this.deleteImage} />;
    }
    else if (this.state.currentView === 'gallery') {
      contents = < GalleryList images={this.state.images} deleteImage={this.deleteImage} />;
    }
    else {
      contents = < DetailList images={this.state.images} deleteImage={this.deleteImage} />;
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
