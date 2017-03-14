import React from 'react'

function Gallery(props) {
    return (
        <div height='50%' width='50%'>
            <img alt={props.image.title} src={props.image.url} height='100%' width='100%' />
        </div>
    );
}

export default function GalleryView(props) {
    return (
        <div>
            {props.images.map(image => (
                <li key={image.id}>
                    <Gallery image={image} />
                </li>
            ))}
        </div>
    );
}