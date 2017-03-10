/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ThumbnailDisplay from '../displays/ThumbnailDisplay';

describe('ThumbnailDisplay', function () {
    it('runs the ThumbnailDisplay', function () {
        const rendered = shallow(<ThumbnailDisplay deleteImage={() => {}} images={[]}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});