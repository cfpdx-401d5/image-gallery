import React from 'react';
import views from './viewTypes';

export default function ViewSelector(props) {
    return (
        <div className={'viewSelectors'}>
            {views.types.map(type => (
                <button
                    key={type.key}
                    onClick={() => props.handleClick(type.key)}
                >
                    {type.label}
                </button>
            ))}
        </div>
    );
};