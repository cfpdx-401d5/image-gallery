/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Gallery from '../Gallery';

describe('Gallery component', function () {
    it('renders the Gallery component', () => {
        const rendered = shallow(<Gallery url='_url' title='_title' description='_description'/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
