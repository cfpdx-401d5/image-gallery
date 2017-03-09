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
//   setImageField(name, newValue) {
//     this.setState({ name: newValue });
//   }

  render() {
    return (
        <form onSubmit={(e) => {
            this.props.addImage(e, this.state.title);}}
        >
            <input
                name='title'
                type='text'
                placeholder='Enter title'
                defaultValue={this.state.title}
                onChange={this.handleInputChange}
            />
            <button type='text'>Submit</button>
        </form>
    );
  }
}
/* TODO: propType validation */
export default FormContainer;
