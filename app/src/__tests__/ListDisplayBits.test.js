/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListDisplayBits from '../displays/ListDisplayBits';

function testFn(a) {
    return a;
}

describe('ListDisplayBits component', function () {
    it('renders the ListDisplayBits component', () => {
        const rendered = shallow(<ListDisplayBits deleteImage={testFn} id='_someId' url='_url' title='_title' description='desc'/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});