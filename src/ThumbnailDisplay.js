import React from 'react';

export default function ThumbnailDisplay(props) {
    return (
        <div>
            <h4>{props.babyBunBun.title}</h4>
            <img src={props.babyBunBun.url} height="100px" alt={props.babyBunBun.title}/><br />
            <button onClick={() => props.deleteBunny(props.babyBunIndex, props.babyBunBun._id)}>Delete Bunny</button>
        </div>
    )
}

ThumbnailDisplay.propTypes = {
  deleteBunny: React.PropTypes.func,
  babyBunIndex: React.PropTypes.number,
  showBuns: React.PropTypes.func,
  babyBunBun: React.PropTypes.object
};