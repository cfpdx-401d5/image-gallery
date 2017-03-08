import React, { Component } from 'react';

export default class EditSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    render() {
        return(
            <div>
                <AddResource />
            </div>
        )
    }
}

function AddResource(props) {
    return (
        <div>
            <form>
                <input placeholder='title'></input>
                <input placeholder='url'></input>
                <input placeholder='description'></input>
            </form>
            <button>Add</button>
        </div>
    )
}
