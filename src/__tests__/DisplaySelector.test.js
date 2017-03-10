/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DisplaySelector from '../DisplaySelector';

describe('DisplaySelector component', function () {
    it('renders the DisplaySelector component', () => {
        const rendered = shallow(<DisplaySelector setDisplay={() => {}} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
