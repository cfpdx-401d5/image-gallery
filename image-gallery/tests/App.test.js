/* eslint-disable */

import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../src/app';
import { List } from '../src/view/list';
import { Gallery } from '../src/view/gallery';
import { Thumbnail } from '../src/view/thumbnail'

describe('schnoodle lists', () => {
    it('runs my test!', () => {
        const rendered = shallow(<App />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});