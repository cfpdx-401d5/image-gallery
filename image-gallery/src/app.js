//the class work yesterday really helped me understand this
import React from 'react';
import { List } from './view/list-view';
import { Gallery } from './view/gallery-view';
import { Thumbnail } from './view/thumbnail-view';

import bunnies from './image';

const GALLERY_TYPE    = 'gallery';
const LIST_TYPE       = 'list';
const THUMBNAIL_TYPE  = 'thumbnail';


function ViewSelector(props) {
    return (
      <div>
        <button onClick={() => props.onClick(GALLERY_TYPE)}>Gallery View</button>
        <button onClick={() => props.onClick(LIST_TYPE)}>List View</button>
        <button onClick={() => props.onClick(THUMBNAIL_TYPE)}>Thumbnail View</button>
      </div>
    );
}

function ImageView(props) {
    const bunnyArray = bunnies();

    const outputs = {
      [LIST_TYPE]: List,
      [GALLERY_TYPE]: Gallery,
      [THUMBNAIL_TYPE]: Thumbnail,
    };    
    
    const OutputComponent = outputs[props.view];

    return (
        <div>
            <ViewSelector onClick={props.onClick}/>
            {OutputComponent 
              ? <OutputComponent array={bunnyArray} />
              : 'Click a button to view bunnies!'
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

ViewSelector.propTypes = {
    onClick: React.PropTypes.func
};

ImageView.propTypes = {
    view: React.PropTypes.string,
    state: React.PropTypes.object,
    onClick: React.PropTypes.func
};