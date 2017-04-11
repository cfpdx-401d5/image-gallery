/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DeleteImageButton from '../DeleteImageButton';

describe('DeleteImageButton', function () {
    it('runs the DeleteImageButton', function () {
        const rendered = shallow(<DeleteImageButton deleteImage={()=>{}} id='_id'/>);
        expect(toJson(rendered)).toMatchSnapshot();
    })
});