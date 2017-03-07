import React, { Component } from 'react';

let galleryImages = [{
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}];

function ImageView(props) {
    if (props.viewSelected === 'listImage') {
        return (<ListImage />)
    } else if (props.viewSelected === 'thumbnail') {
        return (<Thumbnail />)
    } else if (props.viewSelected === 'gallery') {
        return (<Gallery />)
    }
}

function ListImage() {
    return (
        <p>list images here</p>

    );
}

function Thumbnail() {
    return (
        <img alt="this is the cutest bunny" src='http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' height='100px' width='100px' />
    );
}

function Gallery() {
    return (
        <img alt="this is the cutest bunny" src='http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' />
    )
}
function ViewSelect(props) {
    return (
        <div>
            <button onClick={() => props.onListImage()}>  List Images</button>
            <button onClick={() => props.onThumbnail()}> Thumbnail View</button>
            <button onClick={() => props.onGallery()}> Gallery View</button>
        </div>
    );
};

export default class GalleryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewChoice: 'listImage'
        }
        this.onListImage = this.onListImage.bind(this);
        this.onThumbnail = this.onThumbnail.bind(this);
        this.onGallery = this.onGallery.bind(this);

    }// end constructor
    onListImage() {
        this.setState({ viewChoice: 'listImage' })
    }
    onThumbnail() {
        this.setState({ viewChoice: 'thumbnail' })
    }
    onGallery() {
        this.setState({ viewChoice: 'gallery' })
    }

    render() {
        return (
            <div>
                <ViewSelect onListImage={this.onListImage}
                    onThumbnail={this.onThumbnail}
                    onGallery={this.onGallery}
                />
                <ImageView viewSelected={this.state.viewChoice} classname='viewer' />
            </div>
        );
    }
};