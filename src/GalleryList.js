import React from 'react';
import GalleryDisplay from './GalleryDisplay';

export default function GalleryList(props) {
    return (
        <div>
            {props.babyBunBuns.map( b => (
                <GalleryDisplay babyBunBun={b} key={b.id} />
            ))}
        </div>
    )
}