import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App, { ViewSelector, ViewDisplay, ListView, } from '../App';

describe('App', () => {
    it('runs my app', () => {
        const renderer = shallow(<App />);
        expect(toJson(renderer)).toMatchSnapshot();
    });
});

describe('ViewSelector', () => {
    it('selects view', () => {
        const renderer = shallow(<ViewSelector onViewSelect={() => { } } />);
        expect(toJson(renderer)).toMatchSnapshot();
    });
});

describe('ViewDisplay', () => {
    it('displays view', () => {
        const renderer = shallow(<ViewDisplay selectedView={'gallery'} resources={[{ title: 'a', url: 'b', description: 'c' }, { title: '1', url: '2', description: '3' }]} onDelete={() => { } } />);
        expect(toJson(renderer)).toMatchSnapshot();
    });
});

describe('ListView', () => {
    it('displays detail list', () => {
        let output = shallow(<ListView selectedView={'gallery'} resources={[{ title: 'a', url: 'b', description: 'c' }, { title: '1', url: '2', description: '3' }]} onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});
