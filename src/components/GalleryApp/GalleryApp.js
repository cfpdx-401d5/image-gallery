import React, { Component } from 'react';
import ImageView from '../ViewSelector/ImageView';
import AddImage from '../AddImage/AddImage';
import ViewSelector from '../ViewSelector/ViewSelector';

import images from '../images/images';

export default class GalleryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewSelected: 'thumbnail',
            images: images,
        }
        this.handleClick = this.handleClick.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }// end constructor

    handleClick(value) {
        this.setState({ viewSelected: value })
    }

    onAdd(image) {
        this.setState({
            images: this.state.images.concat(image),
        })
    }

    onDelete(toDelete) {
        let newImages = this.state.images.filter((image) => {
            if (image.id !== toDelete.id)
                return image;
        })
        this.setState({
            images: newImages
        })
    }


    render() {
        return (
            <div>
                <ViewSelector handleClick={this.handleClick} />
                <AddImage onAdd={this.onAdd} />
                <ImageView viewSelected={this.state.viewSelected} images={this.state.images} onDelete={this.onDelete} />
            </div>
        );
    }
};
