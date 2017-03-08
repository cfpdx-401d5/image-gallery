/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../App';

describe('App', function () {
    it('runs the App', function () {
        const rendered = shallow(<App />);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});