import React, { Component } from 'react';

import ListDisplay from './displays/ListDisplay';
import ThumbnailDisplay from './displays/ThumbnailDisplay';
import GalleryDisplay from './displays/GalleryDisplay';
import DisplaySelector from './DisplaySelector';
import FormContainer from './image_form/FormContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'list',
      images: [],
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.addImage = this.addImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  setDisplay(whatDisplay) {
    this.setState({ displayType: whatDisplay });
  }

  addImage(imageSubmission) {
    fetch('http://localhost:3001/images', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(imageSubmission)
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        let newImgArray = [...this.state.images];
        delete res.__v;
        newImgArray.push(res);
        this.setState({ images: newImgArray });
      });
  }

  deleteImage(imageID) {
    fetch(`http://localhost:3001/images/${imageID}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(res => {
        if (res.message) {
          let newImgArray = this.state.images.filter(image => {
            return (image._id !== imageID);
          });
          this.setState({ images: newImgArray });
        }
      });
  }

  render() {
    let DisplayType;

    if (this.state.displayType === 'list') DisplayType = ListDisplay;
    else if (this.state.displayType === 'thumbnail') DisplayType = ThumbnailDisplay;
    else if (this.state.displayType === 'gallery') DisplayType = GalleryDisplay;

    return (
        <div>
          <h1>Image Gallery</h1>
          <FormContainer addImage={this.addImage} />
          <DisplaySelector setDisplay={this.setDisplay} />
          <DisplayType images={this.state.images} deleteImage={this.deleteImage} />
        </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3001/images')
      .then(res => res.json())
      .then(resImages => {
        this.setState({ images: resImages });
      });
  }
  
}

