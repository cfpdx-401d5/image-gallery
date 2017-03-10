/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ThumbnailDisplayBits from '../ThumbnailDisplayBits';

describe('ThumbnailDisplayBits component', function () {
    it('renders the ThumbnailDisplayBits component', () => {
        const rendered = shallow(<ThumbnailDisplayBits url='_url' title='_title'/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
