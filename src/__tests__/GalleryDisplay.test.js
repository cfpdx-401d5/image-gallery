/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import GalleryDisplay from '../displays/GalleryDisplay';

describe('GalleryDisplay', function () {
    it('runs the GalleryDisplay', function () {
        const rendered = shallow(<GalleryDisplay deleteImage={() => {}} images={[]}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});