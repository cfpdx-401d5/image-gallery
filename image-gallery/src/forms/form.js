import React from 'react';
import { TextField } from './text-field';
import { TextArea } from './text-area';

export default class AddSchnoodle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            url: ''
        };
        this.handleClearForm = this.handleClearForm.bind(this);
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

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            title: '',
            description: '',
            url: ''
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            id: new Date(),
            title: this.state.title,
            description: this.state.description,
            url: this.state.url
        };
        this.props.onChange(formPayload);
        this.handleClearForm(e);
    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend className="view">Add your schnoodle </legend>
                    <div className="formz">
                    <TextField
                        inputType={'text'}
                        title={'Title: '}
                        name={'title'}
                        controlFunc={this.handleTitleChange}
                        content={this.state.title}
                        placeholder={'Please type the name of your schnoodle for the title'} />
                    <TextArea
                        title={'Description: '}
                        name={'description'}
                        rows={5}
                        resize={false}
                        content={this.state.description}
                        controlFunc={this.handleDescriptionChange}
                        placeholder={'Describe your schnoodle'} />
                    <TextField
                        inputType={'text'}
                        title={'URL: '}
                        name={'url'}
                        controlFunc={this.handleUrlChange}
                        content={this.state.url}
                        placeholder={'Put the link to your picture here'} />
                    </div>
                    <button className='action-button shadow animate green' onClick={this.handleFormSubmit}>Submit</button>
                    <button className='action-button shadow animate red' onClick={this.handleClearForm}>Clear Form</button>
                </fieldset>
            </form>
        );
    }
}

AddSchnoodle.constructor.propTypes = {
    onChange: React.PropTypes.func
};
