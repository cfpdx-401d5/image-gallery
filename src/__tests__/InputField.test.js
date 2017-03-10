/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import InputField from '../image_form/InputField';

describe('InputField component', function () {
    it('renders the InputField component', () => {
        const rendered = shallow(<InputField name='_name' handler={() => {}} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});
