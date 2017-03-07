import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

const cuteBunny = { 
  title: 'Cute Bunny',
  description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
  url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}

function ViewSelector(props) {
  return (<p>ViewSelector</p>)
}

function ListView(props) {
  return (<p>ListView</p>)  
}

function ThumbnailView(props) {
  return (<p>ThumbnailView</p>)  
}

function GalleryView(props) {
  return (<p>GalleryView</p>)  
}

export default class App extends React.Component {
  
  constuctor(props) {
    super(props);
    this.state = {
      currentView: ''
    }
  }
  
  render() {
    return (
      <div>
        < ViewSelector />
        < ListView />
        < ThumbnailView />
        < GalleryView />
      </div>
    )
  }
}


ReactDOM.render(
  <App bunny={cuteBunny}/>,
  document.getElementById('root')
);
