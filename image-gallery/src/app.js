//the class work yesterday really helped me understand this
import React from 'react';
import { List } from './view/list';
import { Gallery } from './view/gallery';

import puppies from './schnoodle';

const GALLERY_TYPE    = 'gallery';
const LIST_TYPE       = 'list';
// const THUMBNAIL_TYPE  = 'thumbnail';


function ViewSelector(props) {
    return (
      <div>
        <button onClick={() => props.onClick(GALLERY_TYPE)}>Gallery View</button>
        <button onClick={() => props.onClick(LIST_TYPE)}>List View</button>
      </div>
    );
}

function ImageView(props) {
    const schnoodleArray = puppies();

    const outputs = {
      [LIST_TYPE]: List,
      [GALLERY_TYPE]: Gallery,
    //   [THUMBNAIL_TYPE]: Thumbnail,
    };    
    
    const OutputComponent = outputs[props.view];

    return (
        <div>
            <ViewSelector onClick={props.onClick}/>
            {OutputComponent 
              ? <OutputComponent array={schnoodleArray} />
              : 'Click a button to view schnoodles!'
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