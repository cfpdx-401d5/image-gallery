/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Wrapper from '../index';

jest.mock('react-dom');

describe('Wrapper', function () {
    it('runs the wrapper', function () {
        const rendered = shallow(<Wrapper />);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});