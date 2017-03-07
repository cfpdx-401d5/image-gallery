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
    return(
        <div>
            <h1>{images[0].title}</h1>
            <img className='thumbnail' src={images[0].url} alt={images[0].title}/>
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
                <ThumbnailView />
            </div>
        )
    }
}
