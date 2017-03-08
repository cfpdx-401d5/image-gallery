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
        <div>
            <tr>
                <td>
                    <h1>{images[0].title}</h1>
                    <p>{images[0].description}</p>
                </td>
                <td>
                    <img src={images[0].url} alt={images[0].title}/>
                </td>
            </tr>
        </div>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplay: ListView,
        };
    };

    render() {
        return (
            <div>
                <div>
                    <button>List View</button>
                    <button>Thumbnail View</button>
                    <button>Gallery View</button>
                </div>
                <div>
                    <p>THIS IS WHERE THE VIEW APPEARS</p>
                </div>
            </div>
        )
    }
}