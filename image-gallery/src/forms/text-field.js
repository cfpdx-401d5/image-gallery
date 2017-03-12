import React from 'react';

function TextField(props) {
    return (
        <div>
            <label>{props.title}</label>
            <input
                name={props.name}
                type={props.inputType}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder} />
        </div>
    );
}

TextField.propTypes = {
    inputType: React.PropTypes.oneOf(['text', 'number']),
    title: React.PropTypes.string,
    name: React.PropTypes.string,
    controlFunc: React.PropTypes.func,
    content: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    placeholder: React.PropTypes.string
}

export {
    TextField
};