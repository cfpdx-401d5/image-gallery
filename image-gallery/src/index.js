import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: null,
        };
    }

    componentWillMount() {
        if (this.state.images) return;

        fetch('/data/schnoodles.json')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    images: res,
                });
            });
    }
    render() {
        if (this.state.images) {
            return (
                <div>
                    <ul>
                        {this.state.images.map((image) => <li key={image.id}>{image.title}</li>)}
                    </ul>
                </div>
            )
        }
        else {
            return <p>Loading...</p>
        }
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)