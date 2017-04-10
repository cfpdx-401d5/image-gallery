import React, { Component, PropTypes } from 'react';

import InputField from './InputField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(e.target.name);

    this.setState({
      [name]: value 
    });
  }

  render() {
    return (
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addImage(this.state);
          e.target.reset();
          this.setState({ title: '', description: '', url: '' });
        }}
        >
          <h4>Add a new image</h4>
          <InputField name='title' handler={this.handleInputChange} />
          <InputField name='description' handler={this.handleInputChange} />
          <InputField name='url' handler={this.handleInputChange} />
          <button type='submit'>Submit</button>
        </form>
    );
  }
}

FormContainer.propTypes = {
  addImage: PropTypes.func.isRequired,
};

export default FormContainer;
