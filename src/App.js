import React, { Component } from 'react';

import ListDisplay from './ListDisplay';
import ThumbnailDisplay from './ThumbnailDisplay';
import GalleryDisplay from './GalleryDisplay';
import Selector from './Selector';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'list',
      images: [{
        id: new Date(),
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      },
      {
        id: new Date(),
        title: 'Upside Down Sloth',
        description: 'Sloths just love to hang out.',
        url: 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/Q-Z/sloth-beach-upside-down.jpg.adapt.945.1.jpg'
      },
      {
        id: new Date(),
        title: 'Waving Panda',
        description: 'When a panda waves, you wave back!',
        url: 'http://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg'
      }
      ],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(whatView) {
    this.setState({ viewType: whatView });
  }

  render() {
    let displayType;

    if (this.state.viewType === 'list') {
      displayType = <ListDisplay images={this.state.images}/>; 
    } else if (this.state.viewType === 'thumbnail') displayType = <ThumbnailDisplay images={this.state.images}/>;
    else if (this.state.viewType === 'gallery') displayType = <GalleryDisplay images={this.state.images}/>;

    return (
        <div>
          <Selector clickHandler={this.clickHandler} />
          {displayType}
        </div>
    );
  }
}

