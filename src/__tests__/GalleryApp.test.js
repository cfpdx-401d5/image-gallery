import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GalleryApp from '../components/GalleryApp';

describe('GalleryApp', () => {
    it('runs the GalleryApp', () => {
        const rendered = shallow(<GalleryApp />);
        const json = toJson(rendered);
        expect(json).toMatchSnapshot();
    })

});

