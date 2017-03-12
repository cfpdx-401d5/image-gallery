//the class work yesterday really helped me understand this
import React from 'react';
import List from './view/list';
import Gallery from './view/gallery';
import Thumbnail from './view/thumbnail'

import puppies from './schnoodle';

const GALLERY_TYPE = 'gallery';
const LIST_TYPE = 'list';
const THUMBNAIL_TYPE = 'thumbnail';

function ImageView(props) {
    const schnoodleArray = puppies();

    const outputs = {
        [LIST_TYPE]: List,
        [GALLERY_TYPE]: Gallery,
        [THUMBNAIL_TYPE]: Thumbnail,
    };

    const OutputComponent = outputs[props.view];

    return (
        <div>
            {OutputComponent
                ? <OutputComponent array={schnoodleArray} />
                : <text className="view">Click a button to view schnoodles:</text>
            }
            <ViewSelector onClick={props.onClick} />
        </div>
    );
}

function ViewSelector(props) {
    return (
        <div className="button-holder">
            <button onClick={() => props.onClick(GALLERY_TYPE)} className="action-button shadow animate red">Gallery View</button>
            <button onClick={() => props.onClick(LIST_TYPE)} className="action-button shadow animate green">List View</button>
            <button onClick={() => props.onClick(THUMBNAIL_TYPE)} className="action-button shadow animate yellow">Thumbnail View</button>
        </div>
    );
}


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
// console.log(<ImageView ViewSelector onClick={[Function]} />)
ImageView.propTypes = {
    view: React.PropTypes.string,
    state: React.PropTypes.object,
    onClick: React.PropTypes.func
};

ViewSelector.propTypes = {
    onClick: React.PropTypes.func
};



