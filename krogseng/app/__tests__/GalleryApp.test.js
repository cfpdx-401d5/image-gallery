import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GalleryApp from '../src/components/GalleryApp/GalleryApp';

describe('GalleryApp', () => {
    it('runs the GalleryApp', () => {
        const rendered = shallow(<GalleryApp />);
        const json = toJson(rendered);
        expect(json).toMatchSnapshot();
    })

});

