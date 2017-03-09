import React from 'react';

export default function Thumbnail(props) {
    return (
        <div>
            <img alt={props.image.title} src={props.image.url} height='100px' width='100px' />
            <h4>{props.image.title}</h4>
        </div>
    );
}