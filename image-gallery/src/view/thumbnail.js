import React from 'react';

function ThumbnailDisplay(props) {
  return (
    <div className="clearfix">
      <li>
        <p height='20px' width='200'>title: {props.schnoodle.title}</p>
        <img className='thumbnail' src={props.schnoodle.url} alt='' height='100' width='100' />
        <button onClick={() => props.onDelete(props.schnoodle.id)}>Delete</button>
      </li>
    </div>
  );
}

function Thumbnail(props) {
    const thumbnail = props.array.map((schnoodle, index) => {
        return (
            <ThumbnailDisplay key={index} schnoodle={schnoodle} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{thumbnail}</ul>
    );
}

Thumbnail.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func
};

ThumbnailDisplay.propTypes = {
    schnoodle: React.PropTypes.object,
    onDelete: React.PropTypes.func
};

export {
    Thumbnail
};
