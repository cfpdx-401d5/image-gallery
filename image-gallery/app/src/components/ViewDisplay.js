import React from 'react';
import Gallery from './Gallery';
import List from './List';
import Thumbnail from './Thumbnail';

export default function ViewDisplay(props) {
    let selectedView = props.selectedView;
    if (selectedView === 'list') {
        return <List puppies={props.puppies} onDelete={props.onDelete}/>
    }
    else if (selectedView === 'thumbnail') {
        return <Thumbnail puppies={props.puppies} onDelete={props.onDelete}/>
    }
    else if (selectedView === 'gallery') {
        return <Gallery puppies={props.puppies} onDelete={props.onDelete}/>
    }
    else {
        return <p></p>
    }
}
