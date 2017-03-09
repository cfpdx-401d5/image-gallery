import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App, { ViewSelector, ViewDisplay, ListView, ThumbnailView, GalleryView } from '../App';
import AddResource from '../add-resource';

describe('App', () => {
    it('runs my app', () => {
        const renderer = shallow(<App />);
        expect(toJson(renderer)).toMatchSnapshot();
    })
})

describe('ViewSelector', () => {
    it('selects view', () => {
        const renderer = shallow(<ViewSelector />);
        expect(toJson(renderer)).toMatchSnapshot();
    })
})

describe('ViewDisplay', () => {
    it('displays view', () => {
        const renderer = shallow(<ViewDisplay />);
        expect(toJson(renderer)).toMatchSnapshot();
    })
})

describe('DetailList', () => {
    it('displays detail list', () => {
        let output = shallow(<DetailList resource= {{title:'a', url: 'b', description: 'c'}}/>);
        expect(toJson(output)).toMatchSnapshot();
    })
})

describe('ThumbnailList', () => {
    it('displays thumbnail list', () => {
        let output = shallow(<ThumbnailList resource= {{title:'a', url: 'b', description: 'c'}}/>);
        expect(toJson(output)).toMatchSnapshot();
    })
})

describe('GalleryList', () => {
    it('displays gallery list', () => {
        let output = shallow(<GalleryList resource= {{title:'a', url: 'b', description: 'c'}}/>);
        expect(toJson(output)).toMatchSnapshot();
    })
})

describe('DetailDisplay', () => {
    it('', () => {
        
    })
})

describe('ThumbnailDisplay', () => {
    it('', () => {
        
    })
})

describe('GalleryDisplay', () => {
    it('', () => {
        
    })
})

describe('AddResource', () => {
    it('', () => {
        
    })
})

describe('DeleteResource', () => {
    it('', () => {
        
    })
})