import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import GalleryApp from './GalleryApp';

describe('App', () => {
    it('runs the GalleryApp', () => {
        const rendered = shallow(<GalleryApp />);
        const json = toJson(rendered);
        expect(json).toMatchSnapshot();
    })

});

