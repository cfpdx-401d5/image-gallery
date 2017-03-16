import React from 'react';

export default function Gallery(props) {
    const galleryObj = props.puppies.map(puppies => {
        return (
            <GalleryDisplay key={puppies._id} puppies={puppies} onDelete={props.onDelete} />
        );
    });
    return (
        <ul>{galleryObj}</ul>
    );
}

function GalleryDisplay(props) {  
        return (
            <div className="clearfix">
                <li>
                    <p>Title: {props.puppies.title}</p>
                    <img className='gallery-img' src={props.puppies.url} alt='' />
                    <p>Description: {props.puppies.description}</p>
                    <div className="delete"><button className="shadow animate orange" onClick={() => props.onDelete(props.puppies._id)}>Delete</button></div>
                </li>
            </div>
        );
}

