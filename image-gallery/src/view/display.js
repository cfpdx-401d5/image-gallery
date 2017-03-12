import React from 'react';
import { List } from './list';
import { Gallery } from './gallery';
import { Thumbnail } from './thumbnail'
import AddSchnoodle from '../forms/form';

import puppies from '../schnoodle';

const GALLERY_TYPE = 'gallery';
const LIST_TYPE = 'list';
const THUMBNAIL_TYPE = 'thumbnail';
const ADDSCHNOODLE_TYPE = 'addSchnoodle';

function ViewSelector(props) {
    return (
        <div className="button-holder">
            <button onClick={() => props.onClick(GALLERY_TYPE)} className="action-button shadow animate orange">Gallery View</button>
            <button onClick={() => props.onClick(LIST_TYPE)} className="action-button shadow animate yellow">List View</button>
            <button onClick={() => props.onClick(THUMBNAIL_TYPE)} className="action-button shadow animate blue">Thumbnail View</button>
            <button onClick={() => props.onClick(ADDSCHNOODLE_TYPE)} className="action-button shadow animate purple">Add Schnoodle</button>
        </div>
    );
}

export default class ImageView extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSchnoodleChange = this.handleSchnoodleChange.bind(this);
        this.state = {
            puppies: puppies()
        };
    }

    handleDelete(value) {
        const newSchnoodleArray = this.state.puppies.filter(schnoodle => { //eslint-disable-line
            if (schnoodle.id !== value) {
                return schnoodle;
            }
        });
        this.setState({
            puppies: newSchnoodleArray
        });
    }

    handleSchnoodleChange(value) {
        const newSchnoodleArray = this.state.schnoodles.concat(value);
        this.setState({
            puppies: newSchnoodleArray
        });
    }


    render() {
        const outputs = {
            [LIST_TYPE]: List,
            [GALLERY_TYPE]: Gallery,
            [THUMBNAIL_TYPE]: Thumbnail,
            [ADDSCHNOODLE_TYPE]: AddSchnoodle
        };

        const OutputComponent = outputs[this.props.view];

        return (
            <div>
                {OutputComponent
                    ? <OutputComponent array={this.state.puppies} onDelete={this.handleDelete} onChange={this.handleSchnoodleChange}/>
                    : <text className="view">Click a button to view schnoodles:</text>
                }
                <ViewSelector onClick={this.props.onClick} />
            </div>
        );
    }
}

ImageView.constructor.propTypes = {
    view: React.PropTypes.string,
    state: React.PropTypes.object,
    onClick: React.PropTypes.func
};

ViewSelector.propTypes = {
    onClick: React.PropTypes.func
};
