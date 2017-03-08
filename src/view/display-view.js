import React from 'react';
import { DetailList } from './list-view';
import { GalleryList } from './gallery-view';
import { ThumbnailList } from './thumbnail-view';
import { BunnyForm } from './form';

import bunnies from '../image';

const GALLERY_TYPE    = 'gallery';
const LIST_TYPE       = 'list';
const THUMBNAIL_TYPE  = 'thumbnail';
const BUNNYFORM_TYPE  = 'bunnyForm';

function ViewSelector(props) {
    return (
      <div>
        <button onClick={() => props.onClick(GALLERY_TYPE)}>Gallery View</button>
        <button onClick={() => props.onClick(LIST_TYPE)}>Detail View</button>
        <button onClick={() => props.onClick(THUMBNAIL_TYPE)}>Thumbnail View</button>
        <button onClick={() => props.onClick(BUNNYFORM_TYPE)}>Add a new Bunny</button>
      </div>
    );
}

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            bunnies: bunnies()
        };
    }

    handleDelete(value) {
        const newBunnyArray = this.state.bunnies.filter(item => { //eslint-disable-line
            if (item.id !== value) {
                return item;
            }
        });
        this.setState({
            bunnies: newBunnyArray
        });
    }

    render() {

        const outputs = {
            [LIST_TYPE]: DetailList,
            [GALLERY_TYPE]: GalleryList,
            [THUMBNAIL_TYPE]: ThumbnailList,
            [BUNNYFORM_TYPE]: BunnyForm
        };    
    
        const OutputComponent = outputs[this.props.view];

        return (
            <div>
                <ViewSelector onClick={this.props.onClick}/>
                {OutputComponent 
                    ? <OutputComponent array={this.state.bunnies} onDelete={this.handleDelete}/>
                    : 'Click a button to view bunnies!'
                }          
            </div>
        );
    }
}

ViewSelector.propTypes = {
    onClick: React.PropTypes.func
};

ImageView.constructor.propTypes = {
    view: React.PropTypes.string,
    state: React.PropTypes.object,
    onClick: React.PropTypes.func
};
