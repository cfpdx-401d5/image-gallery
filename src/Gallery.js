import React from 'react'


export default function Gallery(props) {
    return (
        <div>
            <img alt={props.image.title} src={props.image.url} />
        </div>
    );
}