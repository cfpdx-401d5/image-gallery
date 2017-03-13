/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import { DetailList } from '../src/view/detail-view';

describe('detail display', () => {
    it('detail display', () => {
        const rendered = shallow(<DetailList array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
