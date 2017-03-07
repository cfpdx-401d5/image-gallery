import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

function ViewSelector(props) {
  return (
    <div>
      <button onClick={(e, selected)=>props.onViewSelect(e, 'List')}>List View</button>
      <button onClick={(e, selected)=>props.onViewSelect(e, 'Thumbnail')}>Thumbnail View</button>
      <button onClick={(e, selected)=>props.onViewSelect(e, 'Gallery')}>Gallery View</button>
    </div>)
}

function ViewDisplay(props) {
  let selectedView = props.selectedView;
  if (selectedView === 'List') {
    return <ListView resource={props.resource}/>
  }
  else if (selectedView === 'Thumbnail') {
    return <ThumbnailView resource={props.resource}/>
  }
  else if (selectedView === 'Gallery') {
    return <GalleryView resource={props.resource}/>
  }
  else {
    return <p>Choose View!</p>
  }
}

function ListView(props) {
  return (
    <div>
      <p>Title: {props.resource.title}</p>
      <p>Url: {props.resource.url}</p>
      <p>Description: {props.resource.description}</p>
    </div>
  )  
}

function ThumbnailView(props) {
  return (
    <div>
      <p>Title: {props.resource.title}</p>
      <img className='thumbnail' src={props.resource.url}/>
    </div>
  )    
}

function GalleryView(props) {
  return (
    <div>
      <p>Title: {props.resource.title}</p>
      <img className='gallery' src={props.resource.url}/>
      <p>Description: {props.resource.description}</p>
    </div>
  ) 
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedView: '',
      resource: {
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      }
    };
    this.onViewSelect = this.onViewSelect.bind(this);
  }

  onViewSelect(e, selected) {
    e.preventDefault();
    console.log('selected', selected)
    
    this.setState({
      selectedView: selected
    })
  }

  render() {
    return (
      <div>
        < ViewSelector onViewSelect={this.onViewSelect}/>
        < ViewDisplay selectedView={this.state.selectedView} resource={this.state.resource}/>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
