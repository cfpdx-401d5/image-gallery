import React from 'react';

export default function DetailDisplay(props) {
    return (
        <div>
            <h4>{props.babyBunBun.title}</h4>
            <a href={props.babyBunBun.url}>See It Here!</a>
            <p>{props.babyBunBun.description}</p>
            <button onClick={() => props.deleteBunny(props.babyBunIndex, props.babyBunBun._id)}>Delete Bunny</button>
        </div>
    )
}

DetailDisplay.propTypes = {
    deleteBunny: React.PropTypes.func,
    babyBunIndex: React.PropTypes.number,
    babyBunBun: React.PropTypes.object
};