import React, { Component } from 'react';
import images from './Images.js';
import './App.css';


const ListView = () => {
    return(
        <div>
            <ul>
                <li>{images[0].title}</li>
                <li>{images[0].description}</li>
                <li>{images[0].url}</li>
            </ul>
        </div>
    )
}

const ThumbnailView = () => {
    return (
        <div>
            <h1>{images[0].title}</h1>
            <img className='thumbnail' src={images[0].url} alt={images[0].title}/>
        </div>    
    )
}

const GalleryView = () => {
    return (
        <tr>
            <td>
                <h1>{images[0].title}</h1>
                <p>{images[0].description}</p>
            </td>
            <td>
                <img src={images[0].url} alt={images[0].title}/>
            </td>
        </tr>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplay: ListView
        };

    this.viewList = this.viewList.bind(this);
    this.viewThumbnail = this.viewThumbnail.bind(this);
    this.viewGallery = this.viewGallery.bind(this);
    };

    viewList() {
        this.setState({currentDisplay: ListView});
    }

    viewThumbnail() {
        this.setState({currentDisplay: ThumbnailView});
    }

    viewGallery() {
        this.setState({currentDisplay: GalleryView});
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.viewList}>List View</button>
                    <button onClick={this.viewThumbnail}>Thumbnail View</button>
                    <button onClick={this.viewGallery}>Gallery View</button>
                </div>
                <div>
                    <this.state.currentDisplay />
                </div>
            </div>
        )
    }
}