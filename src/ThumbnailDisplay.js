import React from 'react';

export default function ThumbnailDisplay(props) {
    return (
        <div>
            <h4>{props.babyBunBun.title}</h4>
            <img src={props.babyBunBun.url} height="100px" alt={props.babyBunBun.title}/>
        </div>
    )
}