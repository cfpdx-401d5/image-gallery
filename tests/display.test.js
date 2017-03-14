/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import Display from '../src/view/display-view';

describe('list display', () => {
    it('list display', () => {
        const rendered = shallow(<Display array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});