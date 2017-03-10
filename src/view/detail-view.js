import React from 'react';
import EditForm from '../forms/edit-form';

class DetailDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        };
        this.editForm = this.editForm.bind(this);
    }

    editForm() {
        this.setState({
            isEditable: !this.state.isEditable
        });
    }

    render() {
        return (
          <li>
            <p><b>Title:</b> {this.props.item.title}</p>
            <p><b>Description:</b> {this.props.item.description}</p>
            <p><b>URL:</b> <a href={this.props.item.url}>{this.props.item.url}</a></p>
            <button className='buttons' onClick={() => this.props.onDelete(this.props.item.id)}>Delete</button>
            <button className='buttons' onClick={() => this.editForm()}>Edit</button>
            <div>{this.state.isEditable && <EditForm item={this.props.item} onChange={this.props.onChange} onDisplay={this.editForm} onEdit={this.props.onEdit} />}</div>
            <hr />
          </li>
        );
    }
}

export default function DetailList(props) {
    const listItem = props.array.map((item, index) => {
        return (
            <DetailDisplay key={index} item={item} onDelete={props.onDelete} onChange={props.onChange} onEdit={props.onEdit} />
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

DetailList.propTypes = {
    array: React.PropTypes.array,
    onDelete: React.PropTypes.func,
    onEdit: React.PropTypes.func
};

DetailDisplay.propTypes = {
    item: React.PropTypes.object,
    onDelete: React.PropTypes.func,
    onDisplay: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onEdit: React.PropTypes.func
};
