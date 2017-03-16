import React from 'react'

export default function AddImage(props) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;

            const els = form.elements;
            const image = {
                id: new Date().getTime(),
                title: els.title.value,
                description: els.description.value,
                url: els.url.value
            }

            props.onAdd(image);
            form.reset();
        }}>

            <label>Title
                <input name='title' />
            </label>
            <label>Description
                <input name='description' />
            </label>
            <label>URL
                <input name='url' />
            </label>
            <button type='submit'>Add </button>
        </form>
    );
}