import React, { Component } from 'react';

const TITLE = 'title';
const DESCRIPTION = 'description';
const URL = 'url';

function fetcher(options) {
    const { method, path, body } = options;
    return fetch(`http://localhost:8000${path}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });
}

export default class AddResource extends Component {

    addRes(newResource) {
        fetcher({
            path: '/resources',
            method: 'POST',
            body: {
                title: newResource.title,
                url: newResource.url,
                description: newResource.description,
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const newResource = {
                        //id: new Date(),
                        title: this.refs.title.value,
                        url: this.refs.url.value,
                        description: this.refs.description.value,                
                    };
                    this.addRes(newResource);
                    this.props.onAdd(e, newResource);

                }}>
                    <input ref={TITLE} required placeholder={TITLE}/>
                    <input ref={URL} required placeholder={URL}/>
                    <input ref={DESCRIPTION} required placeholder={DESCRIPTION}/>
                    <button>add</button>
                </form>
            </div>
        );
    }
}

