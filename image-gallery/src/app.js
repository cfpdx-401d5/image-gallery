import React, { Component } from 'react';
import AddSchnoodle from './components/form'

const GALLERY_TYPE = 'gallery';
const LIST_TYPE = 'list';
const THUMBNAIL_TYPE = 'thumbnail';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedView: '',
            puppies: props.puppies
        };
    this.onViewSelect = this.onViewSelect.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onViewSelect(selected) {

        this.setState({
            selectedView: selected
        })
    }

    onDelete(value) {
        let newSchnoodleArray = this.state.puppies.filter
        
        (schnoodle => { //eslint-disable-line
            if (schnoodle.id !== value) {
                return schnoodle;
            }
        });

        this.setState({
            puppies: newSchnoodleArray
        });
    }

    onSubmit(e, value) {
      e.preventDefault();

      let newSchnoodle = this.state.puppies.slice();
      newSchnoodle.push(newSchnoodle);
      this.setState({
          puppies: newSchnoodle
      })
  }

  render() {
    return (
      <div>
        <ViewSelector onViewSelect={this.onViewSelect}/>
        <ViewDisplay onDelete={this.onDelete} selectedView={this.state.selectedView} puppies={this.state.puppies}/>
        <AddSchnoodle onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

function ViewSelector(props) {
    return (
        <div className="button-holder">
            <h1 className="view">View Schnoodles:</h1>
            <button className="action-button shadow animate red" onClick={(e, selected) => props.onViewSelect(GALLERY_TYPE)} >Gallery View</button>
            <button className="action-button shadow animate purple" onClick={(e, selected) => props.onViewSelect(LIST_TYPE)} >List View</button>
            <button className="action-button shadow animate blue" onClick={(e, selected) => props.onViewSelect(THUMBNAIL_TYPE)} >Thumbnail View</button>
        </div>
    );
}

function ViewDisplay(props) {
    let selectedView = props.selectedView;
    if (selectedView === LIST_TYPE) {
        return <List puppies={props.puppies} onDelete={props.onDelete}/>
    }
    else if (selectedView === THUMBNAIL_TYPE) {
        return <Thumbnail puppies={props.puppies} onDelete={props.onDelete}/>
    }
    else if (selectedView === GALLERY_TYPE) {
        return <Gallery puppies={props.puppies} onDelete={props.onDelete}/>
    }
    else {
        return <p></p>
    }
}

function GalleryDisplay(props) {  
        return (
            <div className="clearfix">
                <li>
                    <p>Title: {props.puppies.title}</p>
                    <img className='gallery-img' src={props.puppies.url} alt='' />
                    <p>Description: {props.puppies.description}</p>
                    <div className="delete"><button className="shadow animate orange" onClick={() => props.onDelete(props.puppies.id)}>Delete</button></div>
                </li>
            </div>
        );
}

function Gallery(props) {
    const galleryObj = props.puppies.map(puppies => {
        return (
            <GalleryDisplay key={puppies.id} puppies={puppies} onDelete={props.onDelete} />
        );
    });
    return (
        <ul>{galleryObj}</ul>
    );
}

function ListDisplay(props) {
    return (
        <div className="clearfix">
          <li>
            <p>Title: {props.puppies.title}</p>
            <p>Description: {props.puppies.description}</p>
            <p>Url: <a href={props.puppies.url}>{props.puppies.url}</a></p>
            <div className="delete"><button className="shadow animate orange" onClick={() => props.onDelete(props.puppies.id)}>Delete</button></div>
          </li>
        </div>
    );
}

function List(props) {
    const listItem = props.puppies.map(puppies => {
        return (
            <ListDisplay key={puppies.id} puppies={puppies} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

function Thumbnail(props) {
    const thumbnail = props.puppies.map(puppies => {
        return (
            <ThumbnailDisplay key={puppies.id} puppies={puppies} onDelete={props.onDelete}/>
        );
    });
    return (
      <ul>{thumbnail}</ul>
    );
}

function ThumbnailDisplay(props) {
  return (
    <div className="clearfix">
      <li>
        <p height='20px' width='200'>title: {props.puppies.title}</p>
        <img className='thumbnail' src={props.puppies.url} alt='' height='100' width='100' />
        <div className="delete"><button className="shadow animate orange" onClick={() => props.onDelete(props.puppies.id)}>Delete</button></div>
      </li>
    </div>
  );
}

export {
    ViewSelector,
    ViewDisplay,
    Gallery,
    GalleryDisplay,
    List,
    ListDisplay,
    Thumbnail,
    ThumbnailDisplay,
}