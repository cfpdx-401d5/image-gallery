import React from 'react';

function ListImage(props) {
    return (
        <ul style={{ type: 'none' }}>
            <li>Title: {props.image.title}</li>
            <li>Description: {props.image.description}</li>
            <li><a href={props.image.url}>{props.image.url}</a></li>
        </ul>
    );
}

export default function ListImageView(props) {
    return (
        <div>
            <h2>Available Images</h2>
            <ol>
                {props.images.map(image => (
                    <li key={image.id} >
                        <ListImage image={image} />
                    </li>
                ))}
            </ol>
        </div>
    );
}