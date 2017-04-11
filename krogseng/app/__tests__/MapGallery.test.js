import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MapGallery from '../src/components/MapGallery/MapGallery';

let images = [{
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}];


describe('MapGallery ', () => {
    it('runs the Gallery component', () => {
        const rendered = shallow(<MapGallery images={images} />);
        const json = toJson(rendered);
        expect(json).toMatchSnapshot();
    })

});