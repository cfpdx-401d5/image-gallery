import React from 'react';

const GALLERY_TYPE = 'gallery';
const LIST_TYPE = 'list';
const THUMBNAIL_TYPE = 'thumbnail';

export default function ViewSelector(props) {
    return (
        <div className="button-holder">
            <h1 className="view">View Schnoodles:</h1>
            <button className="action-button shadow animate red" onClick={(e, selected) => props.onViewSelect(GALLERY_TYPE)} >Gallery View</button>
            <button className="action-button shadow animate purple" onClick={(e, selected) => props.onViewSelect(LIST_TYPE)} >List View</button>
            <button className="action-button shadow animate blue" onClick={(e, selected) => props.onViewSelect(THUMBNAIL_TYPE)} >Thumbnail View</button>
        </div>
    );
}
