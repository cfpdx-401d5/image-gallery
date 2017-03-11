import React, { Component, PropTypes } from 'react';

export default class NewImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
    };
    this.addNewTitle = this.addNewTitle.bind(this);
    this.addNewDescription = this.addNewDescription.bind(this);
    this.addNewUrl = this.addNewUrl.bind(this);
    this.addNewImageObject = this.addNewImageObject.bind(this);
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

  addNewImageObject(e) {
    e.preventDefault();
    const newImage = {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url
    };
    this.props.addImage(newImage);
    this.setState({
      title: '',
      description: '',
      url: ''
    });
  }

  render() {
    return (
      <form submitNew={this.addNewImageObject} className='form'>
        <label>
          Title: <input type='text' value='' placeholderValue='' changeImage={this.addNewImageObject} />
        </label>
        <br />
        <label>
          Description: <input type='text' value={this.state.description} changeImage={this.addNewImageObject} />
        </label>
        <br />
        <label>
          Url: <input type='text' value={this.state.url} changeImage={this.addNewImageObject} />
        </label>
        <br /> <br />
        <button type='text'> Add New Image </button>
      </form>
    );
  }

}

NewImageForm.propTypes = {
  addNewTitle: PropTypes.string.isRequired,
  addNewDescription: PropTypes.string.isRequired,
  addNewUrl: PropTypes.string.isRequired,
  addNewImageObject: PropTypes.array.isRequired,
  addImage: PropTypes.array.isRequired,
};
