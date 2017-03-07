import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../App';

describe('App', () => {
    it('runs my test', () => {
        const renderer = shallow(<App />);
        expect(toJson(renderer)).toMatchSnapshot();
    })
})