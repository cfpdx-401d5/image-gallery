import React, { Component } from 'react';
import AddResource from './components/editing/AddResource';
import GalleryDisplay from './components/display/Gallery';
import ThumbnailDisplay from './components/display/Thumbnail';
import DetailDisplay from './components/display/Detail';
import fetcher from './helpers/fetcher';

const GALLERY_TYPE = 'gallery';
const LIST_TYPE = 'list';
const THUMBNAIL_TYPE = 'thumbnail';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedView: '',
            resources: []
        };
        this.onViewSelect = this.onViewSelect.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onViewSelect(e, selected) {
        e.preventDefault();
        this.setState({
            selectedView: selected
        });
    }
    doFetch() {
        fetcher({
            path: '/resources',
            method: 'GET',
        })
        .then(res => res.json())
        .then(resources => {
            this.setState({ resources });
        })
        .catch(err => { console.log(err); });
    }

    componentDidMount() {
        this.doFetch();
    }

    onDelete(id) {
        fetcher({
            path: `/resources/${id}`,
            method: 'DELETE'
        });
        this.doFetch();
    }

    onAdd(newResource) {
        let newData = this.state.resources.slice();
        newData.push(newResource);
        this.setState({
            resources: newData
        });
    }

    render() {
        return (
            <div>
                < ViewSelector onViewSelect={this.onViewSelect} />
                < ViewDisplay onDelete={this.onDelete} selectedView={this.state.selectedView} resources={this.state.resources} />
                < AddResource onAdd={this.onAdd} />
            </div>
        );
    }
}

function ViewSelector(props) {
    return (
        <div className='view-selector'>
            <button onClick={(e, selected) => props.onViewSelect(e, LIST_TYPE)}>List View</button>
            <button onClick={(e, selected) => props.onViewSelect(e, THUMBNAIL_TYPE)}>Thumbnail View</button>
            <button onClick={(e, selected) => props.onViewSelect(e, GALLERY_TYPE)}>Gallery View</button>
        </div>);
}

function ViewDisplay(props) {
    let selectedView = props.selectedView;
    if (selectedView) {
        return (
            <ListView
                selectedView={selectedView}
                resources={props.resources}
                onDelete={props.onDelete} 
            />);
    } else {
        return <p>Choose View!</p>;
    }
}

function ListView(props) {
    let DisplayType;
    const selectedView = props.selectedView;
    if (selectedView === LIST_TYPE) DisplayType = DetailDisplay;
    else if (selectedView === GALLERY_TYPE) DisplayType = GalleryDisplay;
    else if (selectedView === THUMBNAIL_TYPE) DisplayType = ThumbnailDisplay;

    const resourceList = props.resources.map(resource => {
        return (
            <DisplayType
                key={resource._id}
                resource={resource}
                onDelete={props.onDelete} 
            />);
    });

    return (
        <div>{resourceList}</div>
    );
}

export {
    ViewSelector,
    ViewDisplay,
    ListView,
};
