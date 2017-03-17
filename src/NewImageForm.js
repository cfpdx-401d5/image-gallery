import React, { Component, PropTypes } from 'react';

export default class NewImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
      id: '',
    };
    this.addNewTitle = this.addNewTitle.bind(this);
    this.addNewDescription = this.addNewDescription.bind(this);
    this.addNewUrl = this.addNewUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNewTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  addNewDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  addNewUrl(e) {
    this.setState({
      url: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newImage = {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url,
      id: Date.now(),
    };
    this.props.addImage(newImage);
    this.setState({
      title: '',
      description: '',
      url: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <label>
          Title: <input type='text' defaultValue={this.state.title} onChange={this.addNewTitle} />
        </label>
        <br />
        <label>
          Description: <input type='text' defaultValue={this.state.description} onChange={this.addNewDescription} />
        </label>
        <br />
        <label>
          Url: <input type='text' defaultValue={this.state.url} onChange={this.addNewUrl} />
        </label>
        <br /> <br />
        <button type='text'> Add New Image </button>
      </form>
    );
  }

}

NewImageForm.propTypes = {
  addImage: PropTypes.func.isRequired,
};
