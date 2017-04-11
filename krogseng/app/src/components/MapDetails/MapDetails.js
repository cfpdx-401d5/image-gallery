import React from 'react';

function DisplayDetails(props) {
    return (
        <li>
            <ul className={'textListBox'}>
                <li>Title: {props.image.title}</li>
                <li>Description: {props.image.description}</li>
                <li><a href={props.image.url}>{props.image.url}</a></li>
            </ul>
        </li>
    );
}

export default function MapDetails(props) {
    return (
        <div className={'mainContent'} >
            <h2>Available Images</h2>
            <ul>
                {props.images.map(image => (
                    <DisplayDetails key={image._id} image={image} />
                ))}
            </ul>
        </div>
    );
}