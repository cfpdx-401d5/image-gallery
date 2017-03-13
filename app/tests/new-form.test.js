/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import BunnyForm from '../src/forms/BunnyForm';

describe('list display', () => {
    it('list display', () => {
        const rendered = shallow(<BunnyForm array={[]} onDelete={() => {}} onChange={() => {}} onEdit={() => {}} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});