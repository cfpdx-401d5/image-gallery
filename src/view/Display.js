import React from 'react';
import EditForm from '../forms/EditForm';

function ChooseView(props) {
    switch (props.view) {

        case 'gallery':
            return (
                <div>
                    <p><b>Title:</b> {props.item.title}</p>
                    <img className='gallery' src={props.item.url} alt='cute bunnys'/>
                    <p><b>Description:</b> {props.item.description}</p>
                </div>
            );

        case 'details':
            return (
                <div>
                    <p><b>Title:</b> {props.item.title}</p>
                    <p><b>Description:</b> {props.item.description}</p>
                    <p><b>URL:</b> <a href={props.item.url}>{props.item.url}</a></p>
                </div>
            );

        case 'thumbnail':
            return (
                <div>
                    <p><b>Title:</b> {props.item.title}</p>
                    <img className='thumbnail' src={props.item.url} alt='cute bunnys'/>
                </div>
            );

        default:
            return (
                'Something went wrong.'
            );
    }
}

function Buttons(props) {
    return (
        <div>
            <button className='buttons' onClick={() => props.onDelete(props.item.id)}>Delete</button>
            <button className='buttons' onClick={() => props.edit()}>Edit</button>
            <div>{props.isEditable && <EditForm item={props.item} onChange={props.onChange} onDisplay={props.edit} onEdit={props.onEdit} />}</div>
        </div>
    );
}

class Display extends React.Component {
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
                <ChooseView 
                    item={this.props.item} 
                    view={this.props.view} />

                <Buttons 
                    edit={this.editForm} 
                    isEditable={this.state.isEditable}
                    onDelete={this.props.onDelete} 
                    onChange={this.props.onChange} 
                    onEdit={this.props.onEdit}
                    item={this.props.item} />
                    <hr />
            </li>
        );
    }
}

function DisplayList(props) {
    const listItem = props.array.map((item, index) => {
        return (
            <Display 
            key={index} 
            item={item} 
            onDelete={props.onDelete} 
            onChange={props.onChange} 
            onEdit={props.onEdit} 
            view={props.view} />
        );
    });
    return (
      <ul>{listItem}</ul>
    );
}

export { DisplayList };

DisplayList.propTypes = {
    array: React.PropTypes.array,
    view: React.PropTypes.string
};

Display.propTypes = {
    onDelete: React.PropTypes.func,
    onEdit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    item: React.PropTypes.object,
    view: React.PropTypes.string
};

Buttons.propTypes = {
    onDelete: React.PropTypes.func,
    onEdit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    item: React.PropTypes.object,
    editForm: React.PropTypes.func,
    isEditable: React.PropTypes.bool,
    edit: React.PropTypes.func
};

ChooseView.propTypes = {
    view: React.PropTypes.string,
    item: React.PropTypes.object
};
