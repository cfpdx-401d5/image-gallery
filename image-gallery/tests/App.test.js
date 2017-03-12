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
        const rendered = shallow(<Gallery array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});

//none of my other tests will work