/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThumbnailList } from '../src/view/thumbnail-view';

describe('thumbnail view', () => {
    it('thumbnail display', () => {
        const rendered = shallow(<ThumbnailList array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});