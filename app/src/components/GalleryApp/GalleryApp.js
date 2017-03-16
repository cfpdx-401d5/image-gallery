import React, { Component } from 'react';
import ImageView from '../ViewSelector/ImageView';
import AddImage from '../AddImage/AddImage';
import ViewSelector from '../ViewSelector/ViewSelector';

import images from '../images/images';

const localUrl = 'http://localhost:8000/images';

export default class GalleryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewSelected: 'thumbnail',
            images: [],
        }
        this.handleClick = this.handleClick.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }// end constructor

    handleClick(value) {
        this.setState({ viewSelected: value })
    }

    onAdd(image) {
        console.log('image', image);
        fetch(localUrl, { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(image), method: "POST" })
            .then(res => {
                return res.json();
            })
            .then((newImage) => {
                this.setState({
                    images: this.state.images.concat(newImage),
                });
            });
    }

    onDelete(toDelete) {
        fetch(`${localUrl}/${toDelete._id}`, { headers: { 'Content-Type': 'application/json' }, method: "DELETE" })
            .then(res => {
                return res.json();
            })
            .then((res) => {
                if (res.deleted) {
                    let newImages = this.state.images.filter((image) => {
                        if (image._id !== toDelete._id)
                            return image;
                    })
                    this.setState({
                        images: newImages
                    })
                }
            })
    }

    componentDidMount() {
        fetch(localUrl, {
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
            .then(res => {
                return res.json();
            })
            .then(images => {
                this.setState({ images })
            })
    }

    render() {
        return (
            <div >
                <ViewSelector handleClick={this.handleClick} />
                <AddImage onAdd={this.onAdd} />
                <ImageView viewSelected={this.state.viewSelected} images={this.state.images} onDelete={this.onDelete} />
            </div >
        );
    }
};