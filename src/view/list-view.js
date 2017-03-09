import React from 'react';

function List(props) {
    const listItem = props.array.map((item, index) => {
        return (
          <li key={index}>
            <p>title: {item.title}</p>
            <p>description: {item.description}</p>
            <p>url: <a href={item.url}>{item.url}</a></p>
          </li>
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

List.propTypes = {
    array: React.PropTypes.array
};

export {
    List
};
