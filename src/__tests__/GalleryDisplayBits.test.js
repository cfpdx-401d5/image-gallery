/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import GalleryDisplayBits from '../GalleryDisplayBits';

describe('GalleryDisplayBits component', function () {
    it('renders the GalleryDisplayBits component', () => {
        const rendered = shallow(<GalleryDisplayBits url='_url' title='_title' description='_description'/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
