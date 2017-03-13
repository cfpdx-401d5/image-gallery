import React from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

export default function ThumbnailList(props) {
    return (
        <div>
            {props.babyBunBuns.map( (b, i) => (
                <ThumbnailDisplay key={b.id} deleteBunny={props.deleteBunny} babyBunIndex={i} babyBunBun={b}/>
            ))}
        </div>
    )
}

ThumbnailList.propTypes = {
  deleteBunny: React.PropTypes.func,
  babyBunBuns: React.PropTypes.array
};