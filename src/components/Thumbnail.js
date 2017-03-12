import React from 'react';

function Thumbnail(props) {
    return (

        <li className={'mixedGroup'}>
            <h4>{props.image.title}</h4>
            <img alt={props.image.title} src={props.image.url} height='100px' width='100px' />
            <button onClick={() => props.onDelete(props.image)} > Delete</button>
        </li>
    );
}

export default function ThumbnailView(props) {
    return (
        <div className={'mainContent'}>
            <ul>
                {props.images.map(image => (
                    <li key={image.id}>
                        <Thumbnail image={image} onDelete={props.onDelete} />
                    </li>
                ))}
            </ul>
        </div>

    );

}