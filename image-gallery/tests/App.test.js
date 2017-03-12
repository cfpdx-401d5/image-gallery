/* eslint-disable */

import React from 'react';
import {shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../src/app';
import List from '../src/view/list';
import Gallery from '../src/view/gallery';
import Thumbnail from '../src/view/thumbnail'

describe('my buttons click handlers', () => {
    it('runs my test!', () => {
        const rendered = shallow(<App />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('gallery view', () => {
    it('displays gallery list', () => {
        const rendered = shallow(<Gallery array= {[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('list view', () => {
    it('displays list w correct properties', () => {
        const rendered = shallow(<List array= {[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

describe('thumbnail view', () => {
    it('display thumbnail list', () => {
        const rendered = shallow(<Thumbnail array = {[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

//none of my other tests will work