import React from 'react';
import { shallow } from 'enzyme'; //this is a renderer that renders to a virtual DOM
import toJson from 'enzyme-to-json';

import ImageGallery from '../src/App.js';
import { Selector } from '../src/App.js';
import { View } from '../src/App.js';

import Thumbnail from '../src/Thumbnail.js';
import List from '../src/List.js';
import Gallery from '../src/Gallery.js';


describe('Selector component', () => {
    it('creates buttons', () => {
        const wrapper = shallow(<Selector />);
        const wrapped = toJson(wrapper);
        expect(wrapped).toMatchSnapshot();
    })
})

describe('View Component', () => {
    it('toggles view style', () => {
        const wrapper = shallow(<View />);
        const wrapped = toJson(wrapper);
        expect(wrapped).toMatchSnapshot();
    })
})

describe('Overarching ImageGallery Component', () => {
    it('manages state', () => {
        const wrapper = shallow(<ImageGallery />);
        const wrapped = toJson(wrapper);
        expect(wrapped).toMatchSnapshot();
    })
})

describe('Thumbnail Component', () => {
    const testBunny = {
        title: 'Baby Bunny Goes Flop',
        description: 'Adorable bunny flopped over on its side',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/16/4e/8a/164e8aff9e9744e0062c9964d65da48b.jpg'
    };
    it('creates small titled images of babybunbuns', () => {
        const wrapper = shallow(<Thumbnail babyBunBuns={testBunny}/>);
        const wrapped = toJson(wrapper);
        expect(wrapped).toMatchSnapshot();
    })
})

describe('List Component', () => {
    const testBunny = {
        title: 'Baby Bunny Goes Flop',
        description: 'Adorable bunny flopped over on its side',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/16/4e/8a/164e8aff9e9744e0062c9964d65da48b.jpg'
    };
    it('creates a bunnylist with title, link, and description of picture', () => {
        const wrapper = shallow(<List babyBunBuns={testBunny}/>);
        const wrapped = toJson(wrapper);
        expect(wrapped).toMatchSnapshot();
    })
})

describe('Gallery Component', () => {
    const testBunny = {
        title: 'Baby Bunny Goes Flop',
        description: 'Adorable bunny flopped over on its side',
        url: 'https://s-media-cache-ak0.pinimg.com/736x/16/4e/8a/164e8aff9e9744e0062c9964d65da48b.jpg'
    };
    it('creates full-sized, titled images of bunbuns with descriptions', () => {
        const wrapper = shallow(<Thumbnail babyBunBuns={testBunny}/>);
        const wrapped = toJson(wrapper);
        expect(wrapped).toMatchSnapshot();
    })
})
//expect(wrapper.find('li.className')).toHaveLength(3);