/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Thumbnail from '../Thumbnail';

describe('Thumbnail component', function () {
    it('renders the Thumbnail component', () => {
        const rendered = shallow(<Thumbnail url='_url' title='_title'/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
