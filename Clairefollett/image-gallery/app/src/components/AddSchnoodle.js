import React, { Component } from 'react';

export default class AddSchnoodle extends Component {
    render() {
        return(
            <div>
                <h1 className="add">Add Schnoodle:</h1>
                <form onSubmit={(e) => {
                    const newSchnoodle = {
                        title: this.refs.Title.value,
                        url: this.refs.Url.value,
                        description: this.refs.Description.value,                
                    }
                    this.props.onSubmit(e, newSchnoodle)
                }}>
                    <input ref='Title' required placeholder='Title'></input>
                    <input ref='Url' required placeholder='Url'></input>
                    <input ref='Description' required placeholder='Description'></input>
                    <button type="submit" className="action-button shadow animate green">Add</button>
                </form>
            </div>
        )
    }
}