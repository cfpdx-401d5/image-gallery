import React from 'react';



// not real sure how the outputs works, but it does
function ImageView(props) {
    const outputs = {
        [GALLERY_TYPE]: Gallery,
        [THUMBNAIL_TYPE]: Thumbnail,
        [LISTIMAGE_TYPE]: ListImage
    }

    const ComponentToRender = outputs[props.viewSelected];

    return (
        <div>
            {ComponentToRender
                ? <ComponentToRender image={image} />
                : 'Click a button to view images'
            }
        </div>
    );
}