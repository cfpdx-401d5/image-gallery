import React from 'react';
import ImageView from './view/display'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            view: null
        };
    }

    handleClick(value) {
        this.setState({
            view: value
        });
    }

    render() {
        return (
            <div>
                <ImageView view={this.state.view} onClick={this.handleClick} />
            </div>
        );
    }
}



