import React from 'react';

function DisplayThumbnail(props) {
    return (
        <ul>
            <li className={'mixedGroup'}>
                <h4>{props.image.title}</h4>
                <img alt={props.image.title} src={props.image.url} height='100px' width='100px' />
                <button onClick={() => props.onDelete(props.image)} > Delete</button>
            </li>
        </ul>
    );
}

export default function MapThumbnails(props) {
    return (
        <div className={'mainContent'}>
            <ul>
                {props.images.map(image => (
                    <li key={image.id}>
                        <DisplayThumbnail image={image} onDelete={props.onDelete} />
                    </li>
                ))}
            </ul>
        </div>

    );

}