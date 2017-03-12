import React from 'react';

function ListDisplay(props) {
    return (
        <div className="clearfix">
          <li>
            <p>title: {props.schnoodle.title}</p>
            <p>description: {props.schnoodle.description}</p>
            <p>url: <a href={props.schnoodle.url}>{props.schnoodle.url}</a></p>
            <button onClick={() => props.onDelete(props.schnoodle.id)}>Delete</button>
          </li>
        </div>
    );
}

function List(props) {
    const listItem = props.array.map((schnoodle, index) => {
        return (
            <ListDisplay key={index} schnoodle={schnoodle} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

List.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func
};

ListDisplay.propTypes = {
    schnoodle: React.PropTypes.object,
    onDelete: React.PropTypes.func
};

export {
    List
};
