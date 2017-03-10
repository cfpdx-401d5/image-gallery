import React from 'react';
import babyBunBuns from '../data/bunnyimages';
import Thumbnail from './Thumbnail';
import List from './List';
import Gallery from './Gallery';


export function Selector(props) {
  return (
    <div>
      <button onClick={() => props.handleClick('thumbnail')}>Thumbnail View</button>
      <button onClick={() => props.handleClick('list')}>List View</button>
      <button onClick={() => props.handleClick('gallery')}>Gallery View</button>
    </div>
  )
}

Selector.propTypes = {
  
}

export function View(props) {
  if (props.viewStyle === 'thumbnail') {
    return (
      <Thumbnail babyBunBuns={props.babyBunBuns[0]}/>
    )
  }
  else if (props.viewStyle === 'list') {
    return (
      <List babyBunBuns={props.babyBunBuns[1]}/>
    )
  }
  else if (props.viewStyle === 'gallery') {
    return (
      <Gallery babyBunBuns={props.babyBunBuns[2]}/>
    )
  }
  else {
    return (
      <p>Click a Button to Get Started</p>
    )
  }
}

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewStyle: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.babyBunBuns = babyBunBuns;
  }

  handleClick(viewValue) {
    console.log(viewValue);
    this.setState({
      viewStyle: viewValue
    });
  }

  render() {
    return (
      <div>
        <Selector handleClick={this.handleClick}/>
        <View babyBunBuns={this.babyBunBuns} viewStyle={this.state.viewStyle}/>
      </div>
    );
  }
}
