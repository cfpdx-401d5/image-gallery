import React from 'react';

export default function ListImage(props) {
    return (
        <div>
            <h2>Available Images</h2>
            <ul>
                <li>Title: {props.image.title}</li>
                <li><a href={props.image.url}>Link to Image </a></li>
                <li>Description: {props.image.description}</li>
            </ul>
        </div>
    );
}