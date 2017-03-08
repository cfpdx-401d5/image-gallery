import React from 'react';

function GalleryDisplay(props) {
    return (
          <li> 
            <p><b>Title:</b> {props.item.title}</p>
            <img className='gallery' src={props.item.url} alt='cute bunnys'/>
            <p><b>Description:</b> {props.item.description}</p>
            <button className='buttons' onClick={() => props.onDelete(props.item.id)}>Delete</button>
            <button className='buttons'>Edit</button>
            <hr />
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
