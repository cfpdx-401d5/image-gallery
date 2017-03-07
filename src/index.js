import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const bunnies = require('./image');

function List(array) {
    const listItem = array.map((item, index) => {
        return (
          <li key={index}>
            title: {item.title}
            description: {item.description}
            url: {item.url}
          </li>
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

function Thumbnail(array) {
    const thumbnail = array.map((item, index) => {
        return (
          <li key={index}>
            title: {item.title}
            <img className='thumbnail' src={item.url} alt='cute bunnys'/>
          </li>
        );
    });
    return (
      <ul>{thumbnail}</ul>
    );
}

function Gallery(array) {
    const galleryItem = array.map((item, index) => {
        return (
          <li key={index}> 
            title: {item.title}
            <img className='gallery' src={item.url} alt='cute bunnys'/>
            description: {item.description}
          </li>
        );
    });
    return (
      <ul>{galleryItem}</ul>
    );
}

function ViewSelector(props) {
    console.log(props);
    return (
      <div>
        <button onClick={props.onList}>List View</button>
        <button onClick={props.onGallery}>Gallery View</button>
        <button onClick={props.onThumbnail}>Thumbnail View</button>
      </div>
    );
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.ListView = this.ListView.bind(this);
        this.GalleryView = this.GalleryView.bind(this);
        this.ThumbnailView = this.ThumbnailView.bind(this);
    }

    ListView() {
        const bunnyArray = bunnies();
        return List(bunnyArray);
    }

    GalleryView() {
        const bunnyArray = bunnies();
        return Gallery(bunnyArray);
    }

    ThumbnailView() {
        const bunnyArray = bunnies();
        return Thumbnail(bunnyArray);
    }

    render() {
        return (
          <div>
            <ViewSelector onThumbnail={this.ThumbnailView} 
            onGallery={this.GalleryView}
            onList={this.ListView} />
          </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
