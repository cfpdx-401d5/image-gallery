import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';

import InputField from './InputField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
      id: '',
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
          this.setState({ id: shortid.generate() });
          this.props.addImage(e, this.state);
          e.target.reset();
        }}
        >
          <h4>Add a new image</h4>
          <InputField name='title' handler={this.handleInputChange} />
          <InputField name='description' handler={this.handleInputChange} />
          <InputField name='url' handler={this.handleInputChange} />
          <button type='text'>Submit</button>
        </form>
    );
  }
}

FormContainer.propTypes = {
  addImage: PropTypes.func.isRequired,
};

export default FormContainer;
