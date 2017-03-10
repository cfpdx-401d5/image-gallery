/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Selector from '../Selector';

function testClickHandler(a) {
    return a;
}

describe('Selector component', function () {
    it('renders the Selector component', () => {
        const rendered = shallow(<Selector clickHandler={testClickHandler}/>);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
