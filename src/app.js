import React from 'react';
import ImageView from './view/display-view';
import List from './view/detail-view';
import Gallery from './view/gallery-view';
import Thumbnail from './view/thumbnail-view';

import bunnies from './image';

const GALLERY_TYPE    = 'gallery';
const DETAIL_TYPE       = 'detail';
const THUMBNAIL_TYPE  = 'thumbnail';

function ViewSelector(props) {
    return (
      <div>
        <button onClick={() => props.onClick(GALLERY_TYPE)}>Gallery View</button>
        <button onClick={() => props.onClick(DETAIL_TYPE)}>List View</button>
        <button onClick={() => props.onClick(THUMBNAIL_TYPE)}>Thumbnail View</button>
      </div>
    );
}

function ImageView(props) {
    const bunnyArray = bunnies();
    const outputs = {
        [DETAIL_TYPE]: List,
        [GALLERY_TYPE]: Gallery,
        [THUMBNAIL_TYPE]: Thumbnail,
    };    
    
    const OutputComponent = outputs[props.view];

    return (
        <div>
            <ViewSelector onClick={props.onClick}/>
            {OutputComponent 
                ? <OutputComponent 
                    array={bunnyArray} />
                : <h3>Click a button to view bunnies!</h3>
            }          
        </div>
    );
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            view: null
        };
    }

    handleClick(value) {
        this.setState({
            view: value
        });
    }

    render() {
        return (
          <div>
            <ImageView view={this.state.view} onClick={this.handleClick}/>
          </div>
        );
    }
}
