import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App, {
    ViewSelector,
    ViewDisplay,
    DetailList,
    ThumbnailList,
    GalleryList,
} from '../App';
import AddResource from '../add-resource';
import ThumbnailDisplay from '../DisplayComponents/Thumbnail';
import DetailDisplay from '../DisplayComponents/Detail';
import GalleryDisplay from '../DisplayComponents/Gallery';

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

describe('DetailList', () => {
    it('displays detail list', () => {
        let output = shallow(<DetailList resources={[{ title: 'a', url: 'b', description: 'c' }, { title: '1', url: '2', description: '3' }]} onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});

describe('ThumbnailList', () => {
    it('displays thumbnail list', () => {
        let output = shallow(<ThumbnailList resources={[{ title: 'a', url: 'b', description: 'c' }, { title: '1', url: '2', description: '3' }]} onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});

describe('GalleryList', () => {
    it('displays gallery list', () => {
        let output = shallow(<GalleryList resources={[{ title: 'a', url: 'b', description: 'c' }, { title: '1', url: '2', description: '3' }]} onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});

describe('DetailDisplay', () => {
    it('displays one detail resource', () => {
        let output = shallow(<DetailDisplay key={new Date()} resource={{ title: 'a', url: 'b', description: 'c' }} onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});

describe('ThumbnailDisplay', () => {
    it('displays one thumbnail resource', () => {
        let output = shallow(<ThumbnailDisplay key={new Date()} resource={{ title: 'a', url: 'b', description: 'c' }} onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});

describe('GalleryDisplay', () => {
    it('displays one gallery resource', () => {
        let output = shallow(<GalleryDisplay key={new Date()} resource={{ title: 'a', url: 'b', description: 'c' }} onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});

describe('AddResource', () => {
    it('adds a resource', () => {
        let output = shallow(<AddResource onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});
