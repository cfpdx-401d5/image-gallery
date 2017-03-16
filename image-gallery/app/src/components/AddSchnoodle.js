import React, { Component } from 'react';

const TITLE = 'Title';
const DESCRIPTION = 'Description';
const URL = 'Url';

export default class AddSchnoodle extends Component {
    render() {
        return(
            <div>
                <h1 className="add">Add Schnoodle:</h1>
                <form onSubmit={(e) => {
                    const newSchnoodle = {
                        id: new Date(),
                        title: this.refs.title.value,
                        url: this.refs.url.value,
                        description: this.refs.description.value,                
                    }
                    this.props.onSubmit(e, newSchnoodle)
                }}>
                    <input ref={TITLE} required placeholder={TITLE}></input>
                    <input ref={URL} required placeholder={URL}></input>
                    <input ref={DESCRIPTION} required placeholder={DESCRIPTION}></input>
                    <button className="action-button shadow animate green">Add</button>
                </form>
            </div>
        )
    }
}