import React, { Component } from 'react';

const TITLE = 'title';
const DESCRIPTION = 'description';
const URL = 'url';

export default class AddResource extends Component {
    render() {
        return(
            <div>
                <form onSubmit={(e) => {
                    const newResource = {
                        id: new Date(),
                        title: this.refs.title.value,
                        url: this.refs.url.value,
                        description: this.refs.description.value,                
                    }
                    this.props.onAdd(e, newResource)
                }}>
                    <input ref={TITLE} required placeholder={TITLE}></input>
                    <input ref={URL} required placeholder={URL}></input>
                    <input ref={DESCRIPTION} required placeholder={DESCRIPTION}></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

