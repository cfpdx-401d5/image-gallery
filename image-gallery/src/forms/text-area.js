import React from 'react';

function TextArea(props) {
    return (
        <div>
            <label>{props.title}</label>
            <textarea
                name={props.name}
                rows={props.rows}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder} />
        </div>
    );
}

TextArea.propTypes = {
    title: React.PropTypes.string,
    rows: React.PropTypes.number,
    name: React.PropTypes.string,
    content: React.PropTypes.string,
    resize: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    controlFunc: React.PropTypes.func
};

export {
    TextArea
};
