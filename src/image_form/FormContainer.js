import React, { Component } from 'react';

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
            this.props.addImage(e, this.state);}}
        >
            <h4>Add a new image</h4>
            <input
                name='title'
                type='text'
                placeholder='Enter title'
                defaultValue={this.state.title}
                onChange={this.handleInputChange}
            />
              <input
                name='description'
                type='text'
                placeholder='Enter description'
                defaultValue={this.state.description}
                onChange={this.handleInputChange}
            />
              <input
                name='url'
                type='text'
                placeholder='Enter url'
                defaultValue={this.state.url}
                onChange={this.handleInputChange}
            />
            <button type='text'>Submit</button>
        </form>
    );
  }
}
/* TODO: propType validation */
export default FormContainer;
