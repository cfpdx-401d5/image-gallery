import React from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

export default function ThumbnailList(props) {
    return (
        <div>
            {props.babyBunBuns.map( (b, i) => (
                <ThumbnailDisplay deleteBunny={props.deleteBunny} babyBunIndex={i} babyBunBun={b} key={b.id} />
            ))}
        </div>
    )
}