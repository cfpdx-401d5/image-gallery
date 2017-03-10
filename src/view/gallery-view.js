import React from 'react';

export default function Gallery(props) {
    const galleryItem = props.array.map((item, index) => {
        return (
          <li key={index}> 
            <p>title: {item.title}</p>
            <img className='gallery' src={item.url} alt='cute bunnys'/>
            <p>description: {item.description}</p>
          </li>
        );
    });
    return (
      <ul>{galleryItem}</ul>
    );
}

Gallery.propTypes = {
    array: React.PropTypes.array
};
