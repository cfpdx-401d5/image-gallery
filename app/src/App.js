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
      images: [{
        id: 'id1',
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      },
      {
        id: 'id2',
        title: 'Upside Down Sloth',
        description: 'Sloths just love to hang out.',
        url: 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/Q-Z/sloth-beach-upside-down.jpg.adapt.945.1.jpg'
      },
      {
        id: 'id3',
        title: 'Waving Panda',
        description: 'When a panda waves, you wave back!',
        url: 'http://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg'
      }
      ],
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.addImage = this.addImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  setDisplay(whatDisplay) {
    this.setState({ displayType: whatDisplay });
  }

  addImage(e, imageSubmission) {
    e.preventDefault();
    // let newImgArray = [...this.state.images]; // copy the images[] in the state
    // newImgArray.push(imageSubmission); // make new image array

    // this.setState({ images: newImgArray });
    fetch('http://localhost:3001/images', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(imageSubmission)
    })
      .then(res => res.json())
      .then(res => {
        let newImgArray = [...this.state.images];
        delete res.__v;
        newImgArray.push(res);
        this.setState({ images: newImgArray });
      });
  }

  deleteImage(imageID) {
    // let newImgArray = this.state.images.filter(image => {
    //   return (image.id !== imageID);
    // });

    // this.setState({ images: newImgArray });
    fetch(`http://localhost:3001/images/${imageID}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(res => {
        if (res.message) {
          let newImgArray = this.state.images.filter(image => {
            return (image.id !== imageID);
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

