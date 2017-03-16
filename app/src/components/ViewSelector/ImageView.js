import React from 'react';
import views from './viewTypes';

// this function receives the selection from viewselector and 
// decides which view to display
export default function ImageView(props) {
    const ViewComponent = views[props.viewSelected];

    return (
        <div>
            {ViewComponent
                ? <ViewComponent images={props.images} onDelete={props.onDelete} />
                : 'Click a button to view images'
            }
        </div>
    );
}

