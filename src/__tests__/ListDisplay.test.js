/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListDisplay from '../displays/ListDisplay';

describe('ListDisplay', function () {
    it('runs the ListDisplay', function () {
        const rendered = shallow(<ListDisplay deleteImage={() => {}} images={[]}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});