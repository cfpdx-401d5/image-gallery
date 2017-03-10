import React, { Component } from 'react';

import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import Selector from './Selector';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'list',
      image: {
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      },
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(whatView) {
    this.setState({ viewType: whatView });
  }

  render() {
    let displayType;

    if (this.state.viewType === 'list') {
      // You can pass the whole object in (this.state.image) but it's clearer when they're their separate properties (see else ifs)
      displayType = <List image={this.state.image}/>; 
    } else if (this.state.viewType === 'thumbnail') displayType = <Thumbnail title={this.state.image.title} url={this.state.image.url}/>;
    else if (this.state.viewType === 'gallery') displayType = <Gallery title={this.state.image.title} url={this.state.image.url} description={this.state.image.description}/>;

    return (
        <div>
          <Selector clickHandler={this.clickHandler} />
          {displayType}
        </div>
    );
  }
}

