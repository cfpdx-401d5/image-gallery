import React from 'react';

function ThumbnailDisplay(props) {
    return (
          <li>
            <p>title: {props.item.title}</p>
            <img className='thumbnail' src={props.item.url} alt='cute bunnys'/>
          </li>
    );
}

function ThumbnailList(props) {
    const thumbnail = props.array.map((item, index) => {
        return (
            <ThumbnailDisplay key={index} item={item} />
        );
    });
    return (
      <ul>{thumbnail}</ul>
    );
}

ThumbnailList.propTypes = {
    array: React.PropTypes.array
};

ThumbnailDisplay.propTypes = {
    item: React.PropTypes.object
};

export {
    ThumbnailList
};
