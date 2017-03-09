import React from 'react';
import ThumbnailDisplay from './ThumbnailDisplay';

export default function ThumbnailList(props) {
    return (
        <div>
            {props.babyBunBuns.map( b => (
                <ThumbnailDisplay babyBunBun={b} key={b.id} />
            ))}
        </div>
    )
}