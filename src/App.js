import React, { Component } from 'react';
import images from './Images.js';

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
                <ListView />
            </div>
        )
    }
}
