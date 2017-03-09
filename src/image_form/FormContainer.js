import React, { Component } from 'react';
import shortid from 'shortid';

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
            <input
                name='title'
                type='text'
                placeholder='Enter title'
                defaultValue=''
                onChange={this.handleInputChange}
            />
              <input
                name='description'
                type='text'
                placeholder='Enter description'
                defaultValue=''
                onChange={this.handleInputChange}
            />
              <input
                name='url'
                type='text'
                placeholder='Enter url'
                defaultValue=''
                onChange={this.handleInputChange}
            />
            <button type='text'>Submit</button>
        </form>
    );
  }
}
/* TODO: propType validation */
export default FormContainer;
