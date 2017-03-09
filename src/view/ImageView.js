import React from 'react';
import { DisplayList } from './Display';
import BunnyForm from '../forms/new-form';
import bunnies from '../image';
const constants = require('../constants');

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
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBunnyChange = this.handleBunnyChange.bind(this);
        this.handleBunnyEdit = this.handleBunnyEdit.bind(this);
        this.state = {
            bunnies: bunnies()
        };
    }

    handleDelete(value) {
        const newBunnyArray = this.state.bunnies.filter(item => { //eslint-disable-line
            if (item.id !== value) {
                return item;
            }
        });
        this.setState({
            bunnies: newBunnyArray
        });
    }

    handleBunnyChange(value) {
        const newBunnyArray = this.state.bunnies.concat(value);
        this.setState({
            bunnies: newBunnyArray
        });
    }

    handleBunnyEdit(value) {
        this.state.bunnies.forEach((item, index) => {
            if (value.id === item.id) {
                let newBunnyArray = this.state.bunnies;
                newBunnyArray[index] = value;
                this.setState({ bunnies: newBunnyArray });
            } 
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
                        onDelete={this.handleDelete} 
                        onChange={this.handleBunnyChange} 
                        onEdit={this.handleBunnyEdit} />
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
