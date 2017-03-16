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
                <DisplayGallery key={image._id} image={image} />
            ))}
        </div>
    );
}