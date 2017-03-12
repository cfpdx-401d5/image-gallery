/* eslint-disable */

import React from 'react';
import {shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../src/app';
import List from '../src/view/list';
import Gallery from '../src/view/gallery';
import Thumbnail from '../src/view/thumbnail'
import AddSchnoodle from '../src/forms/form';
import Display from '../src/view/display'

describe('my buttons click handlers', () => {
    it('runs my test!', () => {
        const rendered = shallow(<App />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('adding a new schnoodle', () => {
    it('adds a shcnoodle', () => {
        const rendered = shallow(<AddSchnoodle array= {[]} onDelete={() => {}} onChange={() => {{}}} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('rendering list', () => {
    it('displays list', () => {
        const rendered = shallow(<Display array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('thumbnail view', () => {
    it('thumbnail display', () => {
        const rendered = shallow(<Thumbnail array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('gallery view', () => {
    it('gallery display', () => {
        const rendered = shallow(<Gallery array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('list view', () => {
    it('list display', () => {
        const rendered = shallow(<List array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});


//none of my other tests will work