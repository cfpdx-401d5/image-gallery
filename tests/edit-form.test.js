/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import EditForm from '../src/forms/EditForm';

describe('list display', () => {
    it('list display', () => {
        const rendered = shallow(<EditForm item={{}} onChange={() => {}} onDisplay={() => {}} onEdit={() => {}} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});