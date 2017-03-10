import React from 'react';
import DetailDisplay from './DetailDisplay';

export default function DetailList(props) {
    return (
        <div>
            {props.babyBunBuns.map( (b, i) => (
                <DetailDisplay deleteBunny={props.deleteBunny} babyBunIndex={i} babyBunBun={b} key={b.id} />
            ))}
        </div>
    )
}