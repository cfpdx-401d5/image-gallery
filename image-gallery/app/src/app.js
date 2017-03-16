import React, { Component } from 'react';
import AddSchnoodle from './components/AddSchnoodle';
import ViewSelector from './components/ViewSelector';
import ViewDisplay from './components/ViewDisplay';

function fetchPuppies(options) {
    const { method, path, body } = options;
    return fetch(`http://localhost:5000${path}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedView: '',
            puppies: this.initializePups()
        }
    this.onViewSelect = this.onViewSelect.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

    initializePups() {
        fetchPuppies({
            method: 'GET',
            path: '/',
        })
        .then(res => res.json())
        .then(puppies => 
            this.setState({ puppies })
        )
    }

    onViewSelect(selected) {
        this.setState({
            selectedView: selected
        })
    }

    onDelete(puppyId) {
        fetchPuppies({
            method: 'DELETE',
            path: `/${puppyId}`
        })
        .then(res => {
            if (res.status === 200) {
                let newSchnoodleArray = this.state.puppies.filter(schnoodle => {
                        if (schnoodle._id !== puppyId) {
                            return schnoodle;
                        }
                });
                this.setState({
                    puppies: newSchnoodleArray
                });
            }
        })
    }

    onSubmit(e, value) {
      e.preventDefault();
      fetchPuppies({
            method: 'POST',
            path: '/add',
            body: value
        })
        .then(res => res.json())
        .then(res => {
            let newSchnoodle = this.state.puppies.slice();
            newSchnoodle.push(res);
            this.setState({
                puppies: newSchnoodle
            })
        })
  }

  render() {
    return (
      <div>
        <ViewSelector onViewSelect={this.onViewSelect}/>
        <ViewDisplay onDelete={this.onDelete} selectedView={this.state.selectedView} puppies={this.state.puppies}/>
        <AddSchnoodle onSubmit={this.onSubmit}/>
      </div>
    )
  }
}