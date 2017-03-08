import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleFormSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
        <form onSubmit={this.props.clickHandler}>
            hello from FormContainer <br />
            {this.props.message}
            <input
                name='testing'
            />
        </form>
    );
  }
}
/* TODO: propType validation */
export default FormContainer;
