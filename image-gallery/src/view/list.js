import React from 'react';

function List(props) {
    const listObj = props.array.map((schnoodle, index) => {
        return (
          <li key={index}>
            <p>title: {schnoodle.title}</p>
            <p>description: {schnoodle.description}</p>
            <p>url: <a href={schnoodle.url}>{schnoodle.url}</a></p>
          </li>
        );
    });
    return (
      <ul>{listObj}</ul>
    );
}

List.propTypes = {
    array: React.PropTypes.array
};

export {
    List
};