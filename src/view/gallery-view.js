import React from 'react';
import EditForm from '../forms/edit-form';

class GalleryDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: { display: 'none' }
        };
    }

    editForm(value) {
        this.setState({ isEditable: { display: 'block' } });
    }

    render() {
        return (
          <li> 
            <p><b>Title:</b> {this.props.item.title}</p>
            <img className='gallery' src={this.props.item.url} alt='cute bunnys'/>
            <p><b>Description:</b> {this.props.item.description}</p>
            <button className='buttons' onClick={() => this.props.onDelete(this.props.item.id)}>Delete</button>
            <button className='buttons' onClick={() => this.editForm(this.props.item)}>Edit</button>
            <div style={this.state.isEditable}><EditForm item={this.props.item} onChange={this.props.onChange} /></div>
            <hr />
          </li>
        );
    }
}

function GalleryList(props) {
    const galleryItem = props.array.map((item, index) => {
        return (
            <GalleryDisplay key={index} item={item} onDelete={props.onDelete} onChange={props.onChange} />
        );
    });
    return (
      <ul>{galleryItem}</ul>
    );
}

GalleryList.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func,
    onChange: React.PropTypes.func
};

GalleryDisplay.propTypes = {
    item: React.PropTypes.object,
    onDelete: React.PropTypes.func,
    onChange: React.PropTypes.func
};

export {
    GalleryList
};
