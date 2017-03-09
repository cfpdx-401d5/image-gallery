import React from 'react';

export default class GalleryDisplay extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      showBun: true
    };
    this.showHandler = this.showHandler.bind(this);
  }

    showHandler(showBunValue) { //move all view logic to new class in refactor
    this.setState({
      showBun: showBunValue
    });
  }

  render() {
    if (this.state.showBun) {
        return (
            <div>
                <h4>{this.props.babyBunBun.title}</h4>
                <img alt={this.props.babyBunBun.title} src={this.props.babyBunBun.url}/><br />
                <button onClick={() => this.showHandler(false)}>Hide Bunny</button>
                <button onClick={() => this.props.deleteBunny(this.props.babyBunIndex)}>Delete Bunny</button>
                <p>{this.props.babyBunBun.description}</p>
            </div>
        )
    }
    else {
        return (
            <button onClick={() => this.showHandler(true)}>Show Bunny</button>
        )
    }
  }
}