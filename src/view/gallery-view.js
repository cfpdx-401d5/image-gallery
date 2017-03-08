import React from 'react';

function GalleryDisplay(props) {
    return (
          <li> 
            <p>title: {props.item.title}</p>
            <img className='gallery' src={props.item.url} alt='cute bunnys'/>
            <p>description: {props.item.description}</p>
          </li>
    );
}

function GalleryList(props) {
    const galleryItem = props.array.map((item, index) => {
        return (
            <GalleryDisplay key={index} item={item} index={index} />
        );
    });
    return (
      <ul>{galleryItem}</ul>
    );
}

GalleryList.propTypes = {
    array: React.PropTypes.array
};

GalleryDisplay.propTypes = {
    index: React.PropTypes.number,
    item: React.PropTypes.object
};

export {
    GalleryList
};
