import React from 'react';
import { TextField } from './text-field';
import { TextArea } from './text-area';

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.item.title,
            description: this.props.item.description,
            url: this.props.item.url,
            id: this.props.item._id
        };
        this.handleCancelForm = this.handleCancelForm.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleUrlChange(e) {
        this.setState({ url: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            url: this.state.url
        };

        this.props.onEdit(formPayload);
        this.props.onDisplay();
    }

    handleCancelForm(e) {
        e.preventDefault();
        this.props.onDisplay();
    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend>Edit Image Information: </legend>
                    <TextField
                        inputType={'text'}
                            title={'Title: '}
                            name={'title'}
                            controlFunc={this.handleTitleChange}
                            content={this.state.title}
                            placeholder={this.props.item.title} />
                    <TextArea
                        title={'Description: '}
                        rows={5}
                        resize={false}
                        content={this.state.description}
                        name={'description'}
                        controlFunc={this.handleDescriptionChange}
                        placeholder={this.props.item.description} />
                    <TextField
                        inputType={'text'}
                            title={'URL: '}
                            name={'url'}
                            controlFunc={this.handleUrlChange}
                            content={this.state.url}
                            placeholder={this.props.item.url} />
                    <button className='buttons' onClick={this.handleFormSubmit}>Submit</button>
                    <button className='buttons' onClick={this.handleCancelForm}>Cancel</button>
                </fieldset>
            </form>
        );
    }
}

EditForm.constructor.propTypes = {
    onChange: React.PropTypes.func,
    onDelete: React.PropTypes.func,
    item: React.PropTypes.object,
    onEdit: React.PropTypes.func,
    onDisplay: React.PropTypes.func
};
