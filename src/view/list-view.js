import React from 'react';

function DetailDisplay(props) {
    return (
          <li>
            <p>title: {props.item.title}</p>
            <p>description: {props.item.description}</p>
            <p>url: <a href={props.item.url}>{props.item.url}</a></p>
          </li>
    );
}

function DetailList(props) {
    const listItem = props.array.map((item, index) => {
        return (
            <DetailDisplay key={index} item={item} />
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

DetailList.propTypes = {
    array: React.PropTypes.array
};

DetailDisplay.propTypes = {
    item: React.PropTypes.object
};

export {
    DetailList
};
