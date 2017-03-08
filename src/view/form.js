import React from 'react';

function BunnyForm(props) {
    return (
        <form>
            <fieldset>
                <legend>New Bunny:</legend>
                <label htmlFor='title'>Title: </label>
                <input type='text' ref='title' /><br />
                <label htmlFor='description'>Description: </label>
                <input type='text' ref='description' /><br />
                <label htmlFor='url'>URL: </label>
                <input type='text' ref='url' />
            </fieldset>
        </form>
    );
}

export {
    BunnyForm
};
