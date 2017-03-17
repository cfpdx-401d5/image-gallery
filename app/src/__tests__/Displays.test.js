import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ThumbnailDisplay from '../components/display/Thumbnail';
import DetailDisplay from '../components/display/Detail';
import GalleryDisplay from '../components/display/Gallery';

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
