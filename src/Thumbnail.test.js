import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Thumbnail from './Thumbnail';
let image = {
    title: 'Cute Bunny',
    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
};


describe('Thumbnail', () => {
    it('runs the Thumbnail component', () => {
        const rendered = shallow(<Thumbnail image={image} />);
        const json = toJson(rendered);
        expect(json).toMatchSnapshot();
    })

});