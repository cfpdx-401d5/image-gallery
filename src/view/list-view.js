import React from 'react';

function DetailDisplay(props) {
    return (
          <li>
            <p>title: {props.item.title}</p>
            <p>description: {props.item.description}</p>
            <p>url: <a href={props.item.url}>{props.item.url}</a></p>
            <button onClick={() => props.onDelete(props.item.id)}>Delete</button>
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
