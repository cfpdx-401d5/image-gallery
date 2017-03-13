import React from 'react';
import { DisplayList } from './Display';
import BunnyForm from '../forms/BunnyForm';
const constants = require('../constants');

function fetcher(options) {
    const { method, path, body } = options;
    return fetch(`http://localhost:4000${path}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });
}

function ViewSelector(props) {
    const viewTypes = Object.values(constants);
    const viewButtons = viewTypes.map((item, index) => {
        return <button className='buttons' key={index} onClick={() => props.onClick(item)}>{item} view</button>;
    });
    return (
       <div className='main-buttons'>
        { viewButtons }
      </div>
    );
}

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBunny = this.deleteBunny.bind(this);
        this.addBunny = this.addBunny.bind(this);
        this.editBunny = this.editBunny.bind(this);
        this.state = {
            bunnies: null
        };
    }

    //TODO: Refactor all change handlers to one
    componentDidMount() {
        this.getBunnies();
    }

    getBunnies() {
        fetcher({
            method: 'GET',
            path: '/'
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            this.setState({
                bunnies: res
            });
        })
        .catch(err => {
            console.error('err: ', err);
        });
    }

    addBunny(value) {
        fetcher({
            method: 'POST',
            path: '/',
            body: value
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            const newBunnyArray = this.state.bunnies.concat(res);
            this.setState({
                bunnies: newBunnyArray
            });
        })
        .catch(err => {
            console.error('err: ', err);
        });
    }

    deleteBunny(value) {
        fetcher({
            method: 'DELETE',
            path: `/${value}`
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if (res.deleted) {
                const newBunnyArray = this.state.bunnies.filter(item => { //eslint-disable-line
                    if (item._id !== value) {
                        return item;
                    }
                });
                this.setState({
                    bunnies: newBunnyArray
                });
            }        
        })
        .catch(err => {
            console.error('err: ', err);
        });
    }

    editBunny(value) {
        fetcher({
            method: 'PUT',
            path: `/${value.id}`,
            body: {
                title: value.title,
                description: value.description,
                url: value.url
            }
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            this.state.bunnies.forEach((item, index) => {
                if (value.id === item._id) {
                    let newBunnyArray = this.state.bunnies;
                    newBunnyArray[index] = value;
                    this.setState({ bunnies: newBunnyArray });
                } 
            });
        })
        .catch(err => {
            console.error('err: ', err);
        });
    }

    render() {
        const outputs = {
            [constants.THUMBNAIL_TYPE]: DisplayList,
            [constants.DETAILS_TYPE]: DisplayList,
            [constants.GALLERY_TYPE]: DisplayList,
            [constants.BUNNYFORM_TYPE]: BunnyForm
        };    
    
        const OutputComponent = outputs[this.props.view];

        return (
            <div>
                <ViewSelector onClick={this.props.onClick}/>
                {OutputComponent 
                    ? <OutputComponent 
                        view={this.props.view}
                        array={this.state.bunnies} 
                        onDelete={this.deleteBunny} 
                        onChange={this.addBunny} 
                        onEdit={this.editBunny} />
                    : <h3>Click a button to view bunnies!</h3>
                }          
            </div>
        );
    }
}

ViewSelector.propTypes = {
    onClick: React.PropTypes.func
};

ImageView.constructor.propTypes = {
    view: React.PropTypes.string,
    state: React.PropTypes.object,
    onClick: React.PropTypes.func
};
