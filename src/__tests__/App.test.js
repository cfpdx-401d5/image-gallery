import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App, { ListView, ThumbnailView, GalleryView } from '../App';


describe('App tests', () => {

    it('verifies App render', () => {
        const rendered = shallow(<App />);
        expect(toJson(rendered)).toMatchSnapshot();
    });

    it('ListView', () => {
        let output = shallow(<ListView />);
        expect(toJson(output)).toMatchSnapshot();
    })

    it('ThumbnailView', () => {
        let output = shallow(<ThumbnailView />);
        expect(toJson(output)).toMatchSnapshot();
    })

    it('GalleryView', () => {
        let output = shallow(<GalleryView />);
        expect(toJson(output)).toMatchSnapshot();
    })


});