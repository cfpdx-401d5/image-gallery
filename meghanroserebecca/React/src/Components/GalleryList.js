import React from 'react';
import GalleryDisplay from './GalleryDisplay';

export default function GalleryList(props) {
    return (
        <div>
            {props.babyBunBuns.map( (b, i) => (
                <GalleryDisplay deleteBunny={props.deleteBunny} babyBunIndex={i} showHandler={props.showHandler} showBun={props.showBun} babyBunBun={b} key={b._id} />
            ))}
        </div>
    )
}

GalleryList.propTypes = {
  deleteBunny: React.PropTypes.func,
  showHandler: React.PropTypes.func,
  showBun: React.PropTypes.func,
  babyBunBuns: React.PropTypes.array
};