import React from 'react';
import babyBunBuns from '../data/bunnyimages';
import ThumbnailList from './ThumbnailList';
import DetailList from './DetailList';
import GalleryList from './GalleryList';
import CreateBunnyForm from './NewBunnyForm';


export function Selector(props) {
  return (
    <div>
      <button onClick={() => props.handleClick('thumbnail')}>Thumbnail View</button>
      <button onClick={() => props.handleClick('detail')}>Detail View</button>
      <button onClick={() => props.handleClick('gallery')}>Gallery View</button>
    </div>
  )
}

Selector.propTypes = {
  handleClick: React.PropTypes.func
};

export function View(props) {
  if (props.viewStyle === 'thumbnail') {
    return (
      <ThumbnailList 
        deleteBunny={props.deleteBunny} 
        babyBunBuns={props.babyBunBuns}
      />
    )
  }
  else if (props.viewStyle === 'detail') {
    return (
      <DetailList  
        deleteBunny={props.deleteBunny} 
        babyBunBuns={props.babyBunBuns}
      />
    )
  }
  else if (props.viewStyle === 'gallery') {
    return (
      <GalleryList 
        deleteBunny={props.deleteBunny} 
        showHandler={props.showHandler} 
        showBun={props.showBun} 
        babyBunBuns={props.babyBunBuns}
      />
    )
  }
  else {
    return (
      <p>Click a Button to Get Started</p>
    )
  }
}

View.propTypes = {
  deleteBunny: React.PropTypes.func,
  babyBunBuns: React.PropTypes.array,
  viewStyle: React.PropTypes.string
};

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewStyle: null,
      babyBunBuns: babyBunBuns,
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteBunny = this.deleteBunny.bind(this);
    this.addBunny = this.addBunny.bind(this);
  }

  handleClick(viewValue) {
    console.log(viewValue);
    this.setState({
      viewStyle: viewValue
    });
  }

  deleteBunny(babyBunIndex){
    let babyBunBunsFiltered = this.state.babyBunBuns.filter((element, i)=>{
      if (i !== babyBunIndex) {
        return element
      }
    });
    this.setState({
      babyBunBuns: babyBunBunsFiltered
    })
  }

  addBunny(newBunBun){
    let babyBunBunsMultiplied = this.state.babyBunBuns.concat(newBunBun);
    this.setState({
      babyBunBuns: babyBunBunsMultiplied
    })
  }

  render() {
    return (
      <div>
        <Selector handleClick={this.handleClick}/>
        <CreateBunnyForm addBunny={this.addBunny}/>
        <View 
          deleteBunny={this.deleteBunny} 
          babyBunBuns={this.state.babyBunBuns} 
          viewStyle={this.state.viewStyle}
        />
      </div>
    );
  }
}

