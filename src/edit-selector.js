import React from 'react';

function EditSelector(props) {
    return (
        <div>
            <AddResource />
            <DeleteResource />
        </div>
    )
}

function AddResource(props) {
    return <button>Add</button>
}

function DeleteResource(props) {
    return <button>Delete</button>
}

export default EditSelector;
