/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import List from '../List';

describe('List component', function () {
    it('renders the List component', () => {
        const rendered = shallow(<List image={{url:'_url', title: '_title', description: 'desc'}}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});