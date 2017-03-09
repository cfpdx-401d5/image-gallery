import React from 'react';
import babyBunBuns from '../data/bunnyimages';
import ThumbnailList from './ThumbnailList';
import DetailList from './DetailList';
import GalleryList from './GalleryList';


export function Selector(props) {
  return (
    <div>
      <button onClick={() => props.handleClick('thumbnail')}>Thumbnail View</button>
      <button onClick={() => props.handleClick('detail')}>Detail View</button>
      <button onClick={() => props.handleClick('gallery')}>Gallery View</button>
    </div>
  )
}

export function View(props) {
  if (props.viewStyle === 'thumbnail') {
    return (
      <ThumbnailList babyBunBuns={props.babyBunBuns}/>
    )
  }
  else if (props.viewStyle === 'detail') {
    return (
      <DetailList babyBunBuns={props.babyBunBuns}/>
    )
  }
  else if (props.viewStyle === 'gallery') {
    return (
      <GalleryList babyBunBuns={props.babyBunBuns}/>
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
      viewStyle: null,
      babyBunBuns: babyBunBuns
    };
    this.handleClick = this.handleClick.bind(this);
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
        <View babyBunBuns={this.state.babyBunBuns} viewStyle={this.state.viewStyle}/>
      </div>
    );
  }
}
