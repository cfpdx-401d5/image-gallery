import React from 'react';

function GalleryDisplay(props) {
    return (
          <li> 
            <p>title: {props.item.title}</p>
            <img className='gallery' src={props.item.url} alt='cute bunnys'/>
            <p>description: {props.item.description}</p>
            <button onClick={() => props.onDelete(props.item.id)}>Delete</button>
          </li>
    );
}

function GalleryList(props) {
    const galleryItem = props.array.map((item, index) => {
        return (
            <GalleryDisplay key={index} item={item} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{galleryItem}</ul>
    );
}

GalleryList.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func
};

GalleryDisplay.propTypes = {
    item: React.PropTypes.object,
    onDelete: React.PropTypes.func
};

export {
    GalleryList
};
