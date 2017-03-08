import React from 'react';

function DetailDisplay(props) {
    return (
          <li>
            <p><b>Title:</b> {props.item.title}</p>
            <p><b>Description:</b> {props.item.description}</p>
            <p><b>URL:</b> <a href={props.item.url}>{props.item.url}</a></p>
            <button className='buttons' onClick={() => props.onDelete(props.item.id)}>Delete</button>
            <button className='buttons'>Edit</button>
            <hr />
          </li>
    );
}

function DetailList(props) {
    const listItem = props.array.map((item, index) => {
        return (
            <DetailDisplay key={index} item={item} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

DetailList.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func
};

DetailDisplay.propTypes = {
    item: React.PropTypes.object,
    onDelete: React.PropTypes.func
};

export {
    DetailList
};
