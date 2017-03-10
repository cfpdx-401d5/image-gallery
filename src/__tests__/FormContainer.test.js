/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormContainer from '../image_form/FormContainer';

describe('FormContainer', function () {
    it('runs the FormContainer', function () {
        const rendered = shallow(<FormContainer addImage={() => {}} />
);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});