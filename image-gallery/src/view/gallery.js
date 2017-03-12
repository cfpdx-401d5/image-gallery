import React from 'react';

export default function Gallery(props) {
    const galleryObj = props.array.map((schnoodle, index) => {
        return (
            <div className="clearfix" key={index}>
                <li key={index}>
                    <p>Title: {schnoodle.title}</p>
                    <img className='gallery-img' src={schnoodle.url} alt='' />
                    <p>description: {schnoodle.description}</p>
                </li>
            </div>
        )
    });
    return (
        <ul>{galleryObj}</ul>
    )
}

Gallery.propTypes = {
    array: React.PropTypes.array
};
