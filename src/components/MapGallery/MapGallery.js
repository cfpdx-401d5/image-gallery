import React from 'react'

function DisplayGallery(props) {
    return (
        <img alt={props.image.title} src={props.image.url} />
    );
}

export default function MapGallery(props) {
    return (
        <div className={'mainContent'}>
            {props.images.map(image => (
                <li key={image.id}>
                    <DisplayGallery image={image} />
                </li>
            ))}
        </div>
    );
}