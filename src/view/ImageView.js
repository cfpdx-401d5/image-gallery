import React from 'react';
import { DetailList } from './detail-view';
import { GalleryList } from './gallery-view';
import { ThumbnailList } from './thumbnail-view';
import BunnyForm from '../forms/new-form';
import bunnies from '../image';

const GALLERY_TYPE    = 'gallery';
const LIST_TYPE       = 'list';
const THUMBNAIL_TYPE  = 'thumbnail';
const BUNNYFORM_TYPE  = 'bunnyForm';

function ViewSelector(props) {
    const viewType = [GALLERY_TYPE, LIST_TYPE, THUMBNAIL_TYPE, BUNNYFORM_TYPE];

    const viewButtons = viewType.map((item, index) => {
        return <button className='buttons' key={index} onClick={() => props.onClick(item)}>{item} view</button>;
    });

    return (
       <div className='main-buttons'>
        { viewButtons }
      </div>
    );
}

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBunnyChange = this.handleBunnyChange.bind(this);
        this.handleBunnyEdit = this.handleBunnyEdit.bind(this);
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

    handleBunnyChange(value) {
        const newBunnyArray = this.state.bunnies.concat(value);
        this.setState({
            bunnies: newBunnyArray
        });
    }

    handleBunnyEdit(value) {
        this.state.bunnies.forEach((item, index) => {
            if (value.id === item.id) {
                let newBunnyArray = this.state.bunnies;
                newBunnyArray[index] = value;
                this.setState({ bunnies: newBunnyArray });
            } 
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
                    ? <OutputComponent 
                        array={this.state.bunnies} 
                        onDelete={this.handleDelete} 
                        onChange={this.handleBunnyChange} 
                        onEdit={this.handleBunnyEdit} />
                    : <h3>Click a button to view bunnies!</h3>
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
