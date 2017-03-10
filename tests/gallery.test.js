/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import Gallery from '../src/view/gallery-view';

describe('gallery view', () => {
    it('gallery display', () => {
        const rendered = shallow(<Gallery array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});