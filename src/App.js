import React, { Component } from 'react';
import images from './Images.js';

export default class App extends Component {

    viewList() {
        return (
            <div>
                <ul>
                    <li>{images[0].title}</li>
                </ul>
            </div>
        )
    }   


    render() {
        return (
            <div>
                <h1>Hello, World. This is the separated App!</h1>
            </div>
        )
    }
}
