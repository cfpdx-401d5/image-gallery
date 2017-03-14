import React, { Component } from 'react';
import views from './viewTypes';
import ImageView from './ImageView';

import images from './images';

function ViewSelect(props) {
    return (
        <div>
            {views.types.map(type => (
                <button
                    key={type.key}
                    onClick={() => props.handleClick(type.key)}
                >
                    {type.label}
                </button>
            ))}
        </div>
    );
};


function AddImage(props) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;

            const els = form.elements;
            const image = {
                id: new Date().getTime(),
                title: els.title.value,
                description: els.description.value,
                url: els.url.value
            }

            props.onAdd(image);
            form.reset();
        }}>

            <label>Title
                <input name='title' />
            </label>
            <label>Description
                <input name='description' />
            </label>
            <label>URL
                <input name='url' />
            </label>
            <button type='submit'>Add </button>
        </form>
    );
}

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
                <AddImage onAdd={this.onAdd} />
                <ViewSelect handleClick={this.handleClick} />
                <ImageView viewSelected={this.state.viewSelected} className='viewer' images={this.state.images} onDelete={this.onDelete} />
            </div>
        );
    }
};
