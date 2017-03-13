import React, { Component } from 'react';

// import images from './images';

export function ListView(props) {
  return (
    <div className='image-divs'>
      <p> Title: {props.image.title} </p>
      <p> Description: {props.image.description} </p>
      <p> Link: {props.image.url} </p>
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
    this.deleteImage = this.deleteImage.bind(this);
  }

  clickHandler(newView) {
    this.setState({
      currentView: newView
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
