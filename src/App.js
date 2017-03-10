import React, { Component } from 'react';
import AddResource from './add-resource'

const GALLERY_TYPE = 'gallery';
const LIST_TYPE = 'list';
const THUMBNAIL_TYPE = 'thumbnail';

/////////   APP CLASS   /////////
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedView: '',
      resources: props.resources
    };
    this.onViewSelect = this.onViewSelect.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onViewSelect(e, selected) {
    e.preventDefault();
    
    this.setState({
      selectedView: selected
    })
  }

  onDelete(id) {
      let currentResources = [...this.state.resources];

      currentResources = currentResources.filter(resource => {
          return resource.id !== id;
      })

      this.setState({
          resources: currentResources
      })
  }

  onAdd(e, newResource) {
      e.preventDefault();

      let newData = this.state.resources.slice();
      newData.push(newResource);
      this.setState({
          resources: newData
      })
  }

  render() {
    return (
      <div>
        < ViewSelector onViewSelect={this.onViewSelect}/>
        < ViewDisplay onDelete={this.onDelete} selectedView={this.state.selectedView} resources={this.state.resources}/>
        < AddResource onAdd={this.onAdd}/>
      </div>
    )
  }
}
/////////   END APP CLASS   /////////


function ViewSelector(props) {
  return (
    <div className='view-selector'>
      <button onClick={(e, selected) => props.onViewSelect(e, LIST_TYPE)}>List View</button>
      <button onClick={(e, selected) => props.onViewSelect(e, THUMBNAIL_TYPE)}>Thumbnail View</button>
      <button onClick={(e, selected) =>props.onViewSelect(e, GALLERY_TYPE)}>Gallery View</button>
    </div>)
}

function ViewDisplay(props) {
    let selectedView = props.selectedView;
    if (selectedView === LIST_TYPE) {
        return <DetailList resources={props.resources} onDelete={props.onDelete}/>
    }
    else if (selectedView === THUMBNAIL_TYPE) {
        return <ThumbnailList resources={props.resources} onDelete={props.onDelete}/>
    }
    else if (selectedView === GALLERY_TYPE) {
        return <GalleryList resources={props.resources} onDelete={props.onDelete}/>
    }
    else {
        return <p>Choose View!</p>
    }
}

/////////   LIST COMPONENTS   /////////
function DetailList(props) {
    const detailList = props.resources.map(resource => {
        return <DetailDisplay key={resource.id} resource={resource} onDelete={props.onDelete}/>
    })
    return (
        <div>{detailList}</div>
    );
}

function ThumbnailList(props) {
    const thumbnailList = props.resources.map(resource => {
        return <ThumbnailDisplay key={resource.id} resource={resource} onDelete={props.onDelete}/>
    })
    return (
        <div>{thumbnailList}</div>
    );
}

function GalleryList(props) {
    const galleryList = props.resources.map(resource => {
        return <GalleryDisplay  key={resource.id} resource={resource} onDelete={props.onDelete}/>
    })
    return (
        <div>{galleryList}</div>
    );
}
/////////   END LIST COMPONENTS   /////////

/////////   DISPLAY COMPONENTS   /////////
function DetailDisplay(props) {
  return (
    <div>
        <ul>
        <li>Title: {props.resource.title}</li>
        <li>Url: {props.resource.url}</li>
        <li>Description: {props.resource.description}</li>
        </ul>
        <button onClick={() => props.onDelete(props.resource.id)}>delete</button>
    </div>
  )  
}

function ThumbnailDisplay(props) {
  return (
    <div>
      <p>Title: {props.resource.title}</p>
      <img className='thumbnail' src={props.resource.url} alt='Cute Bunny'/>
      <button onClick={() => props.onDelete(props.resource.id)}>delete</button>
    </div>
  )    
}

function GalleryDisplay(props) {
  return (
    <div>
      <p>Title: {props.resource.title}</p>
      <img className='gallery' src={props.resource.url} alt='Cute Bunny'/>
      <p>Description: {props.resource.description}</p>
      <button onClick={() => props.onDelete(props.resource.id)}>delete</button>
    </div>
  ) 
}
/////////   END DISPLAY COMPONENTS   /////////


/////////   EXPORT   /////////
export {
    ViewSelector,
    ViewDisplay,
    DetailList,
    ThumbnailList,
    GalleryList,
    DetailDisplay,
    ThumbnailDisplay,
    GalleryDisplay
}