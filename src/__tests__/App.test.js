import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App, { ListView, ThumbnailView, GalleryView } from '../App';

describe('App', () => {
    it('runs my test', () => {
        const renderer = shallow(<App />);
        expect(toJson(renderer)).toMatchSnapshot();
    })
})

describe('ListView', () => {
    it('displays list', () => {
        let output = shallow(<ListView resource= {{title:'a', url: 'b', description: 'c'}}/>);
        expect(toJson(output)).toMatchSnapshot();
    })
})

describe('ThumbnailView', () => {
    it('displays list', () => {
        let output = shallow(<ThumbnailView resource= {{title:'a', url: 'b', description: 'c'}}/>);
        expect(toJson(output)).toMatchSnapshot();
    })
})

describe('GalleryView', () => {
    it('displays list', () => {
        let output = shallow(<GalleryView resource= {{title:'a', url: 'b', description: 'c'}}/>);
        expect(toJson(output)).toMatchSnapshot();
    })
})