import React from 'react';

export default function List(props) {
  const listObj = props.array.map((schnoodle, index) => {
    return (
      <div className="clearfix" key={index}>
        <li key={index}>
          <p>title: {schnoodle.title}</p>
          <p>description: {schnoodle.description}</p>
          <p>url: <a href={schnoodle.url}>{schnoodle.url}</a></p>
        </li>
      </div>
    );
  });
  return (
    <ul>{listObj}</ul>
  );
}

List.propTypes = {
  array: React.PropTypes.array
};
