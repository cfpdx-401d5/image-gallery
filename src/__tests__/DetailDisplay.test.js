import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import { DetailDisplay } from '../DetailDisplay';

describe('DetailDisplay component: ', function () {

  it('renders the DetailDisplay component', () => {
    const rendered = shallow(<DetailDisplay image={{title: '_title', description: '_description', url: '_url'}} />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});