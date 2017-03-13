import React from 'react';

export default class CreateBunnyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        url: '',
        description: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleTitleChange(event) {
    this.setState({
        title: event.target.value
    })
  }

  handleUrlChange(event) {
    this.setState({ 
        url: event.target.value
    })
  }

  handleDescriptionChange(event) {
    this.setState({ 
        description: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newBunBun = {
        title: this.state.title,
        url: this.state.url,
        description: this.state.description,
        _id: new Date()
    }
    this.props.addBunny(newBunBun);
    this.setState({
        title: '',
        url: '',
        description: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> 
          Bunny Title: <input type="text" value={this.state.title} onChange={this.handleTitleChange} required/>
        </label>
        <label> 
          Bunny Url: <input type="text" value={this.state.url} onChange={this.handleUrlChange} required/>
        </label>
        <label> 
          Bunny Description: <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} required/>
        </label>
        <input type="submit" value="Add a Bunny!" />
      </form>
    )
  }
}

CreateBunnyForm.propTypes = {
    addBunny: React.PropTypes.func
};