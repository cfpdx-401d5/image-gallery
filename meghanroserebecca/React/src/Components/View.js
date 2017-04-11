import React from 'react';
import ThumbnailList from './ThumbnailList';
import DetailList from './DetailList';
import GalleryList from './GalleryList';

export default function View(props) {
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
