import React, { Component } from 'react';

import ListDisplay from './displays/ListDisplay';
import ThumbnailDisplay from './displays/ThumbnailDisplay';
import GalleryDisplay from './displays/GalleryDisplay';
import Selector from './Selector';
import FormContainer from './image_form/FormContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'list',
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
    this.clickHandler = this.clickHandler.bind(this);
    this.addImage = this.addImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  clickHandler(whatView) {
    this.setState({ viewType: whatView });
  }

  addImage(e, imageSubmission) {
    e.preventDefault();
    let newImgArray = [...this.state.images]; // copy the images[] in the state
    newImgArray.push(imageSubmission); // make new image array

    this.setState({ images: newImgArray });
  }

  deleteImage(imageID) {
    let newImgArray = [...this.state.images].filter(image => {
      return (image.id !== imageID);
    });

    this.setState({ images: newImgArray });
  }

  render() {
    let displayType;

    if (this.state.viewType === 'list') displayType = <ListDisplay images={this.state.images} deleteImage={this.deleteImage}/>; 
    else if (this.state.viewType === 'thumbnail') displayType = <ThumbnailDisplay images={this.state.images} deleteImage={this.deleteImage}/>;
    else if (this.state.viewType === 'gallery') displayType = <GalleryDisplay images={this.state.images} deleteImage={this.deleteImage}/>;

    return (
        <div>
          <FormContainer addImage={this.addImage} />
          <Selector clickHandler={this.clickHandler} />
          {displayType}
        </div>
    );
  }
}

