/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddResource from '../components/editing/AddResource';

describe('AddResource', () => {
    it('adds a resource', () => {
        let output = shallow(<AddResource onDelete={() => { } } />);
        expect(toJson(output)).toMatchSnapshot();
    });
});
