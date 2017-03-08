/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListDisplayBits from '../ListDisplayBits';

describe('ListDisplayBits component', function () {
    it('renders the ListDisplayBits component', () => {
        const rendered = shallow(<ListDisplayBits image={{url:'_url', title: '_title', description: 'desc'}}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});