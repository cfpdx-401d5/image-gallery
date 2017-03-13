/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import { DisplayList } from '../src/view/Display';

describe('display', () => {
    it('display', () => {
        const rendered = shallow(<DisplayList array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});