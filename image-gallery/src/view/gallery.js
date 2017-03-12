import React from 'react';

function GalleryDisplay(props) {
    return (
        <div className="clearfix">
            <li>
                <p>Title: {props.schnoodle.title}</p>
                <img className='gallery-img' src={props.schnoodle.url} alt='' />
                <p>description: {props.schnoodle.description}</p>
                <button onClick={() => props.onDelete(props.schnoodle.id)}>Delete</button>
            </li>
        </div>
    );
}

function Gallery(props) {
    const galleryObj = props.array.map((schnoodle, index) => {
        return (
            <GalleryDisplay key={index} schnoodle={schnoodle} onDelete={props.onDelete} />
        );

    });
    return (
        <ul>{galleryObj}</ul>
    );
}

GalleryDisplay.PropTypes = {
    schnoodle: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

Gallery.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func
};

export {
    Gallery
};
