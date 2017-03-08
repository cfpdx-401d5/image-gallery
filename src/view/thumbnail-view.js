import React from 'react';

function ThumbnailDisplay(props) {
    return (
          <li>
            <p><b>Title:</b> {props.item.title}</p>
            <img className='thumbnail' src={props.item.url} alt='cute bunnys'/>
            <button className='buttons' onClick={() => props.onDelete(props.item.id)}>Delete</button>
            <button className='buttons'>Edit</button>
            <hr />
          </li>
    );
}

function ThumbnailList(props) {
    const thumbnail = props.array.map((item, index) => {
        return (
            <ThumbnailDisplay key={index} item={item} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{thumbnail}</ul>
    );
}

ThumbnailList.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func
};

ThumbnailDisplay.propTypes = {
    item: React.PropTypes.object,
    onDelete: React.PropTypes.func
};

export {
    ThumbnailList
};
