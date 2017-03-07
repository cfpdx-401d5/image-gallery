import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

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
    return <ThumbnailView/>
  }
  else if (selectedView === 'Gallery') {
    return <GalleryView/>
  }
  else {
    return <p>Choose View!</p>
  }
}

function ListView(props) {
  console.log('pr',props.resource)
  return (<p>{props.resource.title}</p>)  
}

function ThumbnailView(props) {
  return (<p>ThumbnailView</p>)  
}

function GalleryView(props) {
  return (<p>GalleryView</p>)  
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
